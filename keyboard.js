window.addEventListener('keypress', (event) => {
    //console.log(event.key);

    if (event.key === 'Enter') {
        chooseNextAction();
    }

    if (event.key === ' ') {
        console.log('Play/Pause');

        const state = player.getPlayerState();

        if (state === 1) {
            player.pauseVideo();
        } else {
            player.playVideo();
        }
    }

    if (event.key === 'i') {
        //toggle program info overlay
        const state = document.getElementById('program-info').dataset.show;

        let newState = null;

        if (state === 'true') {
            newState = false;
        } else {
            newState = true;
        }

        document.getElementById('program-info').dataset.show = newState;
    }
});