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
            'autohide': 1
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

let done = false;
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
    if (commercialCount < 3 && Math.random() < 0.85) {
        console.log('Playing commercial');
        playCommercial();
        document.getElementById('ad-tag').dataset.show = 'true';
        return;
    }

    if (videoQueue.length > 0) {
        console.log('Continuing program');
        playNextVideoInQueue();
    } else {
        console.log('Playing new program');
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