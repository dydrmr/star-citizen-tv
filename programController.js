const programHistory = Array(15).fill(null);
let currentProgram = null;

function updateProgramHistory(programData) {
	programHistory.splice(0, 1);
	programHistory.push(programData);
}


function playNextVideoInQueue() {
	const videoId = videoQueue.shift();
	player.loadVideoById(videoId);
}

function chooseNewProgram() {
	const eligible = programs.filter((program) => {
		return !programHistory.includes(program);
	});

	//console.log('Eligible programs', eligible);

	const index = Math.floor(Math.random() * eligible.length);
	const data = eligible[index];

	//console.log('Chosen program', data);

	updateProgramHistory(data);
	addToVideoQueue(data);
	currentProgram = data;

	playNextVideoInQueue();
}