var programs = [
	["Stanton Today", "2950-09-08: Mira Ngo Interview",
		["EYhub_sugUY"]
	],
	["Stanton Today", "2950-07-20: Standing Chair Protestors",
		["a6fSj2lN1MY"]
	],
	["Stanton Today", "2950-06-30: GrimHEX Renovations",
		["S80Cmx_FrAc"]
	],
	["Stanton Today", "2950-06-08: Invictus Lanuch Week Recap",
		["Uo-9Y_ldu2k"]
	],
	["The Spin", "Nature and Well-Being",
		["tu5FSFzm0qk"]
	],
	["Whitley's Guide", "IAE 2949",
		["exJi4m7oZwU","va1XZbkCOBA","ChzKZtIbcdM","f9-agcr9Wrk","waViZBJL6Xw","RXvhBi33Vqk","lyRsI8mF0Sg","bw-6w82eB8o"]
	],
	["Whitley's Guide", "IAE 2950",
		["N9OAuViakOc","o2FNBi90l9Q","QOu7IPArxX0","PfB228kYlhI"]
	],
	["Voyager Direct", "Galactic Tour",
		["OMGs63MsSBI","3FSFjR0p4Z8","2eKotGpwjbE","IxJj-Tkp8P4","6aeRYrT8Zso","YYeBhPvhybk","4vE6wrgZ3vw","tYQCtaP54qQ","_WTvS6nSSvQ"]
	],
	["Galactic Gear", "Origin M50 Review",
		["_SpsjUHj_II"]
	]
]

var programHistory = Array(3);

function chooseNewProgram() {

	let rnd;

	let tryAgain = true;
	let loopSafetyValve = 0;

	while (tryAgain && loopSafetyValve < 50) {
		loopSafetyValve++;
		
		rnd = Math.floor(Math.random() * programs.length);

		let trigger = false;
		for (let i = 0; i < programHistory.length; i++) {
			if (programHistory[i] == parseInt(rnd)) {
				trigger = true;
			}
		}

		if (!trigger) { tryAgain = false; }
	}

	let result = programs[rnd];
	programHistory.splice(0, 1);
	programHistory.push(parseInt(rnd));

	return result;
}