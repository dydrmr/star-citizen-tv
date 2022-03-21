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
		["N9OAuViakOc","o2FNBi90l9Q","QOu7IPArxX0","PfB228kYlhI","6zblVvZxoVs"]
	],
	["Whitley's Guide", "IAE 2951",
		["91FuH77lPzk","hUqhFlcol70","U2Jl5WnoVpA","WOFwUsmEZ4E","ni-Xj71Zmuo"]
	],
	["Voyager Direct", "Galactic Tour",
		["OMGs63MsSBI","3FSFjR0p4Z8","2eKotGpwjbE","IxJj-Tkp8P4","6aeRYrT8Zso","YYeBhPvhybk","4vE6wrgZ3vw","tYQCtaP54qQ","_WTvS6nSSvQ"]
	],
	["Galactic Gear", "Origin M50 Review",
		["_SpsjUHj_II"]
	],
	["AstroPub & Paul Shelley", "The Jumptown Wars",
		["3V7GFDI7KqE","LILX8w5wBg8"]
	],
	["Imperial Geographic", "Daymar Rally 2950",
		["3a3a9IJlbfU"]
	],
	["CitizenCon 2947", "CNOU Pioneer Presentation",
		["olxI7X7eac8"]
	],
	["Hardspace", "Episode 1",
		["Oun780wv7k0"]
	],
	["Hardspace", "Episode 2",
		["9IRDUR3ptzI"]
	],
	["Hardspace", "Episode 3",
		["Q0QOkyY8QYY"]
	],
	["Hardspace", "Episode 4",
		["4-rNwpRr43I"]
	],
	["Hardspace", "Episode 5",
		["4GU8cvXBrEk"]
	],
	["Hardspace", "Episode 6",
		["Xl9Oi_Tm8ds"]
	],
	["Hardspace", "Episode 7",
		["Ta445VjpaTs"]
	],
	[
	["Feature Film", "The Reunion",
	 	["zPJA54sWAec"]
	],
	["Galactic Geographic", "Microtech Neural Link",
	 	["Aki0qnMj3Ho"]
	],
	["BWC Nocturne", "Episode 1",
	 	["oy_HYrhMpRc"]
	],
	["BWC Nocturne", "Episode 2",
	 	["VzpRo-If95M"]
	],
	["BWC Nocturne", "Episode 3",
	 	["g17pqH3PCko"]
	],
	["BWC Nocturne", "Episode 4",
	 	["5RpAPvjzEqc"]
	],
	["BWC Nocturne", "Episode 5",
	 	["LrH8Jxj1t9Y"]
	]
]


var programHistory = Array(parseInt(programs.length / 1.5));

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
