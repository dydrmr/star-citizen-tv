var commercials = [
	//YouTube ID, Brand, Product, isLong
	["2FcJykFmMc0", "Aegis", "Avenger Warlock", 1],
	["PpUnRqOsQUM", "Anvil", "Arrow", 0],
	["DmNMqHRdBuQ", "Anvil", "Arrow Ad Contest 1", 1],
	["Ke6tbGKUi7g", "Anvil", "Arrow Ad Contest 2", 1],
	["VBrKW7zb4_E", "Anvil", "Arrow Ad Contest 3", 1],
	["kUseGGO_vXc", "Anvil", "Ballista", 1],
	["5BBg3BTbcLo", "Anvil", "Carrack", 0],
	["S1yXxrdrfdM", "Anvil", "Hawk", 0],
	["g0gZES2pTWk", "Anvil", "Hornet", 0],
	["_RmaaxMW2uQ", "Anvil", "Valkyrie", 1],
	["NYQKyhXii2Y", "ARGO", "MOLE", 0],
	["O6hXjxQ0_lk", "Banu", "Defender", 1],
	["Qrb-StrkUqk", "CNOU", "HoverQuad", 0],
	["2zwvPvuVOtE", "CNOU", "Mustang 2948", 0],
	["BR07oZC0QHU", "CNOU", "Mustang 2945", 0],
	["vFXGLz_QX48", "CNOU", "Mustang Ad Contest 1", 1],
	["VcysB_TaDGA", "CNOU", "Mustang Ad Contest 2", 1],
	["9SlT0-uVAqg", "CNOU", "Mustang Ad Contest 3", 1],
	["sn7A6En6ROA", "Crusader Industries", "Ares", 0],
	["TamoB9ubodE", "Crusader Industries", "Hercules Starlifter", 0],
	["qE7TFnSl9y4", "Drake", "Cutlass Black", 0],
	["Bo77GDdDAtE", "Drake", "Cutlass Red", 0],
	["zPSX_K8UyQk", "Drake", "Cutlass Steel", 0],
	["to1kDbR4L4I", "Drake", "Kraken", 1],
	["Op0YkiMm8TQ", "Esperia", "Prowler", 0],
	["YtaFSD9lPyo", "Greycat", "ROC", 0],
	["uJAxvz8kdpQ", "Greycat", "ROC DS", 0],
	["EJbItSsu8A8", "Kruger", "Merlin and Archimedes", 0],
	["xOPAsg77PsI", "MISC", "Freelancer 2947", 0],
	["vO7RxsZpcKc", "MISC", "Freelancer 2944", 0],
	["WqENl_KkIVY", "MISC", "Prospector Ad Contest 1", 1],
	["K2QwCCJSXko", "MISC", "Prospector Ad Contest 2", 1],
	["Wz72MycNwH0", "MISC", "Prospector Ad Contest 3", 1],
	["xAxt4JU2n98", "MISC", "Reliant Series", 0],
	["QGMxGdzYVY8", "Origin", "100 Series", 0],
	["JrQ0qMRZ_1Q", "Origin", "300 Series 2943", 0],
	["qDQ8dbE8qSo", "Origin", "300 Series", 0],
	["lzlNuCJ0NqE", "Origin", "315p 2943", 0],
	["OvIuzXmkTDY", "Origin", "325a 2943", 0],
	["fYjD1wiTBmM", "Origin", "350r 2943", 0],
	["SNtwvxjF4Zg", "Origin", "400i", 0],
	["p1L7Pp7j2lg", "Origin", "600i Touring", 0],
	["rvKS70FDZV8", "Origin", "890 Jump", 0],
	["UvDs7RDKCag", "RSI", "Aurora 2944", 1],
	["zG-82TakEqk", "RSI", "Constellation", 0],
	["NQAFU1eP5ys", "RSI", "Constellation Taurus", 0],
	["6exXWnz9CWY", "RSI", "Mantis", 0],
	["-6Y3eyadjkU", "RSI", "Mantis Ad Contest 1", 1],
	["-uXMVS1pgQs", "RSI", "Mantis Ad Contest 2", 1],
	["I-PzFDiFbhg", "RSI", "Mantis Ad Contest 3", 1],
	["nSe4CpaokZk", "Tumbril", "Cyclone Ad Contest 1", 1],
	["XLrX3UJDDz4", "Tumbril", "Cyclone Ad Contest 2", 1],
	["FrzHfVx8c0g", "Tumbril", "Cyclone Ad Contest 3", 1],
	["9COdE4XXsPM", "Tumbril", "Cyclone MT", 0],
	["2FcJykFmMc0", "Aegis", "Avenger Warlock", 1],
	["urPnDPdxfUY", "Whitley's", "Jax is Back", 0],
	["4dNLq2NUexI", "Whammer's", "Whammer's", 0],
	["2Q2j8z5BJm4", "Sapphire", "Insurance", 0],
	["QQvm9apJTjQ", "Thaum", "Oxypens", 0],
	["iphJA8q6KYw", "The Spin", "Trailer", 0],
	["jWIdb3tkfBo", "Frog Focus", "Magazine", 0],
	["m03VBN_WJvE", "Invictus 2950", "Teaser", 0],
	["ZtXSxvDejIg", "Invictus 2950", "Be Inspired", 1],
	["ULVIz0aCxoE", "Invictus 2951", "Teaser", 0],
	["jyOOhMK24Lk", "Invictus 2951", "Join the Fleet", 1],
	["sK52v7NF-CA", "UEE", "Militia Mobilization Initiative", 1],
	["Xs-LnkFr4PE", "Hardspace", "Promo", 0],
	["IQ36gbK0Sys", "Red Festival", "2951", 0]
]

var commercialHistory = Array(parseInt(commercials.length / 1.5));

function chooseNewCommercial() {

	let rnd;

	let tryAgain = true;
	let loopSafetyValve = 0;

	while (tryAgain && loopSafetyValve < 50) {
		loopSafetyValve++;
		
		rnd = Math.floor(Math.random() * commercials.length);

		let trigger = false;
		for (let i = 0; i < commercialHistory.length; i++) {
			if (commercialHistory[i] == parseInt(rnd)) {
				trigger = true;
			}
		}

		if (!trigger) { tryAgain = false; }
	}

	let ytid = commercials[rnd][0];
	commercialHistory.splice(0, 1);
	commercialHistory.push(parseInt(rnd));

	return ytid;
}
