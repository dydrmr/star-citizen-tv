const commercialHistory = Array(60).fill(null);
let commercialCount = 0;

function updateCommercialHistory(commercialData) {
	commercialHistory.splice(0, 1);
	commercialHistory.push(commercialData);
}

function playCommercial() {
	const eligible = commercials.filter((com) => {
		return !commercialHistory.includes(com);
	});

	const index = Math.floor(Math.random() * eligible.length);
	const data = eligible[index];
	console.log('Chosen commercial', data);
	updateCommercialHistory(data);

	populateProgramInfo('Commercial Break', `${data[1]} ${data[2]}`);
	document.getElementById('ad-tag').dataset.show = 'true';

	commercialCount++;
	const videoId = data[0];
	//console.log('Video id', videoId);
	player.loadVideoById(videoId);
}