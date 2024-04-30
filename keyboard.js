window.addEventListener('keyup', (event) => {

    if (event.key === 'Enter') {
        chooseNextAction();


    } else if (event.key === ' ') {
        const state = player.getPlayerState();

        if (state === 1) {
            player.pauseVideo();
            document.getElementById('pause-overlay').dataset.show = true;
        } else {
            player.playVideo();
            document.getElementById('pause-overlay').dataset.show = false;
        }


    } else if (event.key === 'ArrowRight') {
        player.seekTo(player.getCurrentTime() + 5);


    } else if (event.key === 'ArrowLeft') {
        player.seekTo(player.getCurrentTime() - 5);


    } else if (event.key === 'i') {
        const state = document.getElementById('program-info').dataset.show;
        let newState = (state === 'true') ? false : true;
        document.getElementById('program-info').dataset.show = newState;


    } else {
        console.log(event.key);
    }
});