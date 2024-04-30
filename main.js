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
            'modestbranding': 1,
            'showinfo': 0,
            'autohide': 1,
            'cc_load_policy': 0
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
    //console.log('Player state changed', event);

    if (event.data === YT.PlayerState.ENDED) {
        // handle new video selection
        console.log('Video ended');
        chooseNextAction();
    } else if (event.data === YT.PlayerState.PLAYING) {
        // handle
    } else if (event.data === YT.PlayerState.PAUSED) {
        // handle
    } else if (event.data === YT.PlayerState.BUFFERING) {
        // handle
    }
}

function stopVideo() {
    player.stopVideo();
}


const videoQueue = Array();
function addToVideoQueue(programData) {
    for (const videoId of programData[2]) {
        videoQueue.push(videoId);
    }
}
function chooseNextAction() {
    if (commercialCount === 0) {
        if (Math.random() < 0.8) {
            playCommercial();
            return;
        }

    } else if (commercialCount < 3 && Math.random() < 0.5) {
        playCommercial();
        return;
    }

    if (videoQueue.length > 0) {
        playNextVideoInQueue();
    } else {
        chooseNewProgram();
    }

    populateProgramInfo(currentProgram[0], currentProgram[1]);
    document.getElementById('ad-tag').dataset.show = 'false';
    commercialCount = 0;
}

function populateProgramInfo(title, subtitle) {
    document.getElementById('program-title').innerText = title;
    document.getElementById('program-subtitle').innerText = subtitle;
}

document.getElementById('power-button').addEventListener('click', () => {
    player.setVolume(100);
    chooseNextAction();
    document.getElementById('power-off-screen').dataset.show = false;
})

setInterval(updateDuration, 500);
function updateDuration() {
    if (document.getElementById('power-off-screen').dataset.show === 'true') return;

    if (document.getElementById('ad-tag').dataset.show === 'true') {
        document.getElementById('program-info-right').style.display = 'none';
        return;
    }

    //const duration = convertSecondsToTime(player.getDuration());
    //document.getElementById('program-duration').innerText = duration;

    const remaining = convertSecondsToTime(player.getDuration() - player.getCurrentTime());
    document.getElementById('program-remaining').innerText = remaining;

    document.getElementById('program-info-right').style.display = 'block';
}

function convertSecondsToTime(totalSeconds) {
    let minutes = Math.floor(totalSeconds / 60);
    let seconds = Math.floor(totalSeconds % 60);
    minutes = (minutes < 10) ? "0" + minutes : minutes;
    seconds = (seconds < 10) ? "0" + seconds : seconds;

    if (minutes === '00' && seconds === '00') {
        return '';
    }

    if (minutes === 'NaN' || seconds === 'NaN') {
        return '';
    }

    return `${minutes}:${seconds}`;
}