// SETUP IFRAME PLAYER
const tag = document.createElement('script');
tag.src = 'https://www.youtube.com/iframe_api';
const firstScriptTag = document.getElementsByTagName('script')[0];
firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

// CREATE IFRAME
let player;
function onYouTubeIframeAPIReady() {
    player = new YT.Player('player', {
        //height: '390',
        //width: '640',
        videoId: '3OJDbs1_g30',
        playerVars: {
            'playsinline': 1,
            'controls': 0,
            'disablekb': 1,
            //'modestbranding': 1,
            'showinfo': 0,
            'autohide': 1,
            'cc_load_policy': 0,
            'iv_load_policy': 3
        },
        events: {
            'onReady': onPlayerReady,
            'onStateChange': onPlayerStateChange
        }
    });
}

function onPlayerReady(event) {
    event.target.playVideo();
}

function onPlayerStateChange(event) {
    if (event.data === YT.PlayerState.ENDED) {
        chooseNextAction();
    //} else if (event.data === YT.PlayerState.PLAYING) {
        
    //} else if (event.data === YT.PlayerState.PAUSED) {

    //} else if (event.data === YT.PlayerState.BUFFERING) {

    }
}




let programs = null;
loadData();

const videoQueue = Array();
function addToVideoQueue(programData) {
    const array = programData.ids.split(' ');
    for (const videoId of array) {
        videoQueue.push(videoId);
    }
}
function chooseNextAction() {
    if (commercialCount === 0) {
        if (Math.random() < 0.8) {
            playCommercial();
            hideYoutubeUI();
            return;
        }

    } else if (commercialCount < 3 && Math.random() < 0.5) {
        playCommercial();
        hideYoutubeUI();
        return;
    }

    if (videoQueue.length > 0) {
        playNextVideoInQueue();
    } else {
        chooseNewProgram();
    }

    hideYoutubeUI();
    populateProgramInfo(currentProgram.show, currentProgram.title);
    showElement('ad-tag', false);
    commercialCount = 0;
}

function populateProgramInfo(title, subtitle) {
    document.getElementById('program-title').innerText = title;
    document.getElementById('program-subtitle').innerText = subtitle;
}

document.getElementById('power-button').addEventListener('click', () => {
    //player.setVolume(100);
    chooseNextAction();
    showElement('power-off-screen', false);
})


setInterval(updateDuration, 500);
function updateDuration() {
    if (isVisible('power-off-screen')) return;

    if (isVisible('ad-tag')) {
        showElement('program-info-right', false);
        return;
    }

    const remaining = convertSecondsToTime(player.getDuration() - player.getCurrentTime());
    document.getElementById('program-remaining').innerText = remaining;
    showElement('program-info-right');
}


function convertSecondsToTime(totalSeconds) {
    let minutes = Math.floor(totalSeconds / 60);
    let seconds = Math.floor(totalSeconds % 60);
    minutes = (minutes < 10) ? "0" + minutes : minutes;
    seconds = (seconds < 10) ? "0" + seconds : seconds;

    if (minutes === '00' && seconds === '00') {
        return '';
    }

    if (`${minutes}:${seconds}` === 'NaN:NaN') {
        return '';
    }

    return `${minutes}:${seconds}`;
}

function showElement(elementId, state = true) {
    document.getElementById(elementId).dataset.show = state;
}

function isVisible(elementId) {
    if (document.getElementById(elementId).dataset.show === 'true') {
        return true;
    } else {
        return false;
    }
}


function hideYoutubeUI() {
    //hideYTElement('ytp-show-cards-title');
    //hideYTElement('ytp-watermark');
}

function hideYTElement(className) {
    const iframe = document.getElementById('player');
    const collection = iframe.contentWindow.document.getElementsByClassName(className);
    console.log(collection);
    for (const el of collection) {
        el.style.display - 'none !important';
    }
}