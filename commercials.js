var commercials = [
	//YouTube ID, Brand, Product, isLong
	["QGMxGdzYVY8", "Origin", "100 Series", 0],
	["YtaFSD9lPyo", "Greycat", "ROC", 0],
	["Bo77GDdDAtE", "Drake", "Cutlass Red", 0],
	["Op0YkiMm8TQ", "Esperia", "Prowler", 0],
	["5BBg3BTbcLo", "Anvil", "Carrack", 0],
	["NYQKyhXii2Y", "ARGO", "MOLE", 0],
	["sn7A6En6ROA", "Crusader Industries", "Ares", 0],
	["6exXWnz9CWY", "RSI", "Mantis", 0],
	["O6hXjxQ0_lk", "Banu", "Defender", 1],
	["rvKS70FDZV8", "Origin", "890 Jump", 0],
	["kUseGGO_vXc", "Anvil", "Ballista", 0],
	["EJbItSsu8A8", "Kruger", "Merlin and Archimedes", 0],
	["qDQ8dbE8qSo", "Origin", "300 Series", 0],
	["xAxt4JU2n98", "MISC", "Reliant Series", 0],
	["p1L7Pp7j2lg", "Origin", "600i Touring", 0],
	["xOPAsg77PsI", "MISC", "Freelancer 2947", 0],
	["S1yXxrdrfdM", "Anvil", "Hawk", 0],
	["PpUnRqOsQUM", "Anvil", "Arrow", 0],
	["to1kDbR4L4I", "Drake", "Kraken", 1],
	["2zwvPvuVOtE", "CNOU", "Mustang 2948", 0],
	["BR07oZC0QHU", "CNOU", "Mustang 2945", 0],
	["_RmaaxMW2uQ", "Anvil", "Valkyrie", 0],
	["qE7TFnSl9y4", "Drake", "Cutlass Black", 0],
	["zG-82TakEqk", "RSI", "Constellation", 0],
	["vO7RxsZpcKc", "MISC", "Freelancer 2944", 0],
	["g0gZES2pTWk", "Anvil", "Hornet", 0],
	["UvDs7RDKCag", "RSI", "Aurora 2944", 0],
	["JrQ0qMRZ_1Q", "Origin", "300 Series 2943", 0],
	["lzlNuCJ0NqE", "Origin", "315p 2943", 0],
	["OvIuzXmkTDY", "Origin", "325a 2943", 0],
	["fYjD1wiTBmM", "Origin", "350r 2943", 0],
	["2FcJykFmMc0", "Aegis", "Avenger Warlock", 1],
	["urPnDPdxfUY", "Whitley's", "Jax is Back", 0],
	["4dNLq2NUexI", "Whammer's", "Whammer's", 0],
	["2Q2j8z5BJm4", "Sapphire", "Insurance", 0],
	["QQvm9apJTjQ", "Thaum", "Oxypens", 0],
	["iphJA8q6KYw", "The Spin", "Trailer", 0],
	["jWIdb3tkfBo", "Frog Focus", "Magazine", 0],
	["m03VBN_WJvE", "Invictus 2950", "Teaser", 0],
	["ZtXSxvDejIg", "Invictus 2950", "Be Inspired", 1],
	["sK52v7NF-CA", "UEE", "Militia Mobilization Initiative", 1]
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