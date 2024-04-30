const programs = [
	[
		'Stanton Today',
		'2950-01-16: Mass arrests in Lorville',
		['YUx8W-dt1NA']
	],
	[
		'Stanton Today',
		'2950-01-21: Why are people standing up?',
		['Ts2XbS6AJYU']
	],
	[
		'Stanton Today',
		'2950-01-29: Daymar Rally summary and interview',
		['LHT1fYRBHUE']
	],
	[
		'Stanton Today',
		'2950-02-12: Unions VS UEE court case come to an end',
		['e9EDCQpLqwM']
	],
	[
		'Stanton Today',
		'2950-02-20: Elections for Imperator underway',
		['y0-VgOPerOA']
	],
	[
		'Stanton Today',
		'2950-03-11: Automated prison in Stanton',
		['PEwRwFMjNeY']
	],
	[
		'Stanton Today',
		'2950-03-16: Secondary voting complete',
		['0Af4FVgwYBc']
	],
	[
		'Stanton Today',
		'2950-06-09: Invictus Launch Week summarised',
		['Uo-9Y_ldu2k']
	],
	[
		'Stanton Today',
		'2950-06-30: GrimHEX Renovations',
		['S80Cmx_FrAc']
	],
	[
		'Stanton Today',
		'2950-07-20: Standing Chair Protestors',
		['a6fSj2lN1MY']
	],
	[
		'Stanton Today',
		'2950-09-08: Mira Ngo Interview',
		['EYhub_sugUY']
	],
	[
		'Stanton Today',
		'2951-04-07: Mars Holiday Hiatus',
		['yQZ8jlq_Pmk']
	],
	[
		'Stanton Today',
		'2951-04-20: Tour de \'Verse',
		['QB9tNrsK39A']
	],
	[
		'Stanton Today',
		'2951-05-02: Tour de Verse 2951 - First week',
		['gFSsdcWVa8U']
	],
	[
		'Stanton Today',
		'2951-05-09: Tour de Verse 2951 - Final week',
		['zVgAR4zUf9g']
	],
	[
		'Stanton Today',
		'2951-05-17: Invictus Launch Week',
		['umApFiwVHAc']
	],
	[
		'Stanton Today',
		'2951-05-31: Orison repairs',
		['_BI-MDTsT-A']
	],
	[
		'Stanton Today',
		'2951-06-21: Banu message for the Empire',
		['ZQGGhLP4prA']
	],
	[
		'Stanton Today',
		'2951-07-06: XenoThreat operating in the shadows',
		['HgxcRvFTwR4']
	],
	[
		'Stanton Today',
		'2951-07-29: Whammer\'s anniversary',
		['vcHwZKQ3gPk']
	],
	[
		'Stanton Today EX',
		'2951-08-26: XenoThreat returning',
		['fTi-Gpei4ds']
	],
	[
		'Stanton Today EX',
		'2951-08-29: XenoThreat Report #1',
		['Ub1MdpzXfUk']
	],
	[
		'Stanton Today EX',
		'2951-08-30: XenoThreat Report #2',
		['fTLvivwFCM0']
	],
	[
		'Stanton Today EX',
		'2951-09-02: XenoThreat Report #3',
		['CE1RVtK3-oU']
	],
	[
		'Stanton Today EX',
		'2951-09-05: XenoThreat Report #4',
		['lKOueFsSfuM']
	],
	[
		'Stanton Today',
		'2951-09-13: Military presence at Crusader',
		['vBTlFr-g6q4']
	],
	[
		'Stanton Today EX',
		'2951-09-28: Fortunes, gone!',
		['tgAOJu_eE4Q']
	],
	[
		'Stanton Today',
		'2951-10-04: 990 years of human space travel',
		['jRXSjecnPew']
	],
	[
		'Stanton Today EX',
		'2951-10-07: Rumors regarding UEE bank bug',
		['GAVKka7awVg']
	],
	[
		'Stanton Today EX',
		'2951-10-10: Credit wipe: hoax or real?',
		['PNSHWlsITg8']
	],
	[
		'The Spin',
		'Nature and Well-Being',
		['tu5FSFzm0qk']
	],
	[
		'The Spin',
		'Fueled Motion',
		['Ccmw9hKHnSw']
	],
	[
		'The Spin',
		'Fashion',
		['OWoiF6RLjy8']
	],
	[
		'Whitley\'s Guide',
		'IAE 2949',
		['exJi4m7oZwU', 'va1XZbkCOBA', 'ChzKZtIbcdM', 'f9-agcr9Wrk', 'waViZBJL6Xw', 'RXvhBi33Vqk', 'lyRsI8mF0Sg', 'bw-6w82eB8o']
	],
	[
		'Whitley\'s Guide',
		'IAE 2950',
		['N9OAuViakOc', 'o2FNBi90l9Q', 'QOu7IPArxX0', 'PfB228kYlhI', '6zblVvZxoVs']
	],
	[
		'Whitley\'s Guide',
		'IAE 2951',
		['91FuH77lPzk', 'hUqhFlcol70', 'U2Jl5WnoVpA', 'WOFwUsmEZ4E', 'ni-Xj71Zmuo']
	],
	[
		'Whitley\'s Guide',
		'IAE 2952',
		['41Q7uSF3ijU', 'az5Z8ZT1xNM', 'mkKwJ8gjn_k', 'gRocgiC7BqE', 'BcemmXgVvgk', 'b3G34-lgGV8', 'psL3uXknFnQ', 'a6EPOK6jviw', 'u-ATmag0RJs', 'LODrpwBoZe4', 'wFDIW6W1wRc']
	],
	[
		'Whitley\'s Guide',
		'IAE 2953',
		['Mj5dMa8XaVc']
	],
	[
		'Garman Humble: Security Professional',
		'IAE 2953',
		['k0PN1rd55TU', 'wvW-7cXtlOc']
	],
	[
		'Mahli Goes To Orison',
		'IAE 2953',
		['Mzw4fTnwV8I', 'sG-CX6QMQwE', 'hnWQswlMUS4']
	],
	[
		'Voyager Direct',
		'Galactic Tour',
		['OMGs63MsSBI', '3FSFjR0p4Z8', '2eKotGpwjbE', 'IxJj-Tkp8P4', '6aeRYrT8Zso', 'YYeBhPvhybk', '4vE6wrgZ3vw', 'tYQCtaP54qQ', '_WTvS6nSSvQ']
	],
	[
		'Galactic Gear',
		'Origin M50 Review',
		['_SpsjUHj_II']
	],
	[
		'AstroPub & Paul Shelley',
		'The Jumptown Wars',
		['3V7GFDI7KqE', 'LILX8w5wBg8']
	],
	[
		'Imperial Geographic',
		'Daymar Rally 2950',
		['3a3a9IJlbfU']
	],
	[
		'Galactic Geographic',
		'Ashes of Hades',
		['CxKMn0_fS-E']
	],
	[
		'CitizenCon 2947',
		'CNOU Pioneer Presentation',
		['olxI7X7eac8']
	],
	[
		'Hardspace',
		'Episode 1',
		['Oun780wv7k0']
	],
	[
		'Hardspace',
		'Episode 2',
		['9IRDUR3ptzI']
	],
	[
		'Hardspace',
		'Episode 3',
		['Q0QOkyY8QYY']
	],
	[
		'Hardspace',
		'Episode 4',
		['4-rNwpRr43I']
	],
	[
		'Hardspace',
		'Episode 5',
		['4GU8cvXBrEk']
	],
	[
		'Hardspace',
		'Episode 6',
		['Xl9Oi_Tm8ds']
	],
	[
		'Hardspace',
		'Episode 7',
		['Ta445VjpaTs']
	],
	[
		'Feature Film',
		'The Reunion',
		['zPJA54sWAec']
	],
	[
		'Galactic Geographic',
		'Microtech Neural Link',
		['Aki0qnMj3Ho']
	],
	[
		'BWC Nocturne',
		'Episode 1',
		['oy_HYrhMpRc']
	],
	[
		'BWC Nocturne',
		'Episode 2',
		['VzpRo-If95M']
	],
	[
		'BWC Nocturne',
		'Episode 3',
		['g17pqH3PCko']
	],
	[
		'BWC Nocturne',
		'Episode 4',
		['5RpAPvjzEqc']
	],
	[
		'BWC Nocturne',
		'Episode 5',
		['LrH8Jxj1t9Y']
	],
	[
		'Fat Bird',
		'The STV Review Greycat Didn\'t Ask For',
		['3OJDbs1_g30']
	],
	[
		'Fat Bird',
		'EMERGENCY LANDING leads to Unexpected Friends',
		['raEZs0NFnkU']
	],
	[
		'The Astro Historian',
		'The Medical Miracle Workers of Bioticorp',
		['Jd0MaDCDOCQ']
	],
	[
		'The Astro Historian',
		'Capital Ships Of The UEE Navy',
		['2Vp3xnDZZ-Q']
	],
	[
		'The Astro Historian',
		'The Alien Response To Humanity: Aopoa San\'tok.yai',
		['eGPhpIZRVBU']
	],
	[
		'The Astro Historian',
		'First Bloody Interplanetary War: Unification Wars',
		['8SHZRUF7PXU']
	],
	[
		'The Astro Historian',
		'Complete Look At Every Religion In Star Citizen',
		['w0N7BOah05U']
	],
	[
		'Horizon\'s Edge: Star Citizen History of Space Flight',
		'Episode 1: The Hard Climb',
		['vwGonAicDY0']
	],
	[
		'Horizon\'s Edge: Star Citizen History of Space Flight',
		'Episode 2: Pioneers',
		['UzXdE_0RIiM']
	],
	[
		'Horizon\'s Edge',
		'Origin of the Day of the Vara and the Ghost Ship from beyond Saturn',
		['jvlkDUSVALI']
	],
	[
		'Star Citizen Real Lives',
		'Episode 1: Introducing Willie Dustice!',
		['Ge7doExa5I8']
	],
	[
		'Star Citizen Real Lives',
		'Episode 2: Willie vs the Noodle Bar!',
		['90-kz2ahrDM']
	],
	[
		'Star Citizen Real Lives',
		'Episode 3: Willie vs Lorville landing services!',
		['EDu16e4-P6g']
	],
	[
		'Star Citizen Real Lives',
		'Episode 4: Willie vs Zeta-Prolanide!',
		['hE4lgaSzJ2I']
	],
	[
		'Star Citizen Real Lives',
		'Episode 5: Willie vs The Airless Void of Space!',
		['u6nHg0i3JKI']
	],
	[
		'Star Citizen Real Lives',
		'Episode 6: Willie vs Almost Nearly Dying!',
		['9wc4d4kRbSA']
	],
	[
		'Kalani\'s Diary',
		'What a Weird Day',
		['eoRtWa7bJcU']
	],
	[
		'Kalani\'s Diary',
		'The One Where I Buy a Ship',
		['ux_GHPg2lVg']
	],
	[
		'Kalani\'s Diary',
		'A Jumptown Get Down',
		['EAe_pmZI-kI']
	],
	[
		'Kalani\'s Diary',
		'Lo-Fi Beats to Deliver Boxes to',
		['x0T1vxkCiaw']
	],
	[
		'Kalani\'s Diary',
		'I\'m Sick of this Ship',
		['eZvlQxLHtns']
	],
	[
		'Kalani\'s Diary',
		'The Daredevils of Daymar',
		['Kmyz9LNObsc']
	],
	//[
	//	'Aliens',
	//	'',
	//	['AQAZXCbVPUU']
	//],
	//[
	//	'Overclocked',
	//	'Prequel',
	//	['HP9rLdDMWxE']
	//],
	[
		'Overclocked',
		'Episode 1',
		['iQp6T961gIo']
	],
	[
		'Overclocked',
		'Episode 2',
		['gn9NsvwTe6I']
	],
	[
		'Overclocked',
		'Episode 3',
		['QssrUEv8N_U']
	],
	[
		'Overclocked',
		'Episode 4',
		['Txe5FTHb9HA']
	],
	[
		'Overclocked',
		'Episode 5',
		['6UiIMGfwWd4']
	],
	[
		'Overclocked',
		'Episode 6',
		['Wa4DUQhUzkQ']
	],
	[
		'Overclocked',
		'Episode 7',
		['o5rDWjNa6SU']
	],
	//[
	//	'Overclocked',
	//	'Episode 8',
	//	['78QBHScx37A']
	//],
	[
		'Overclocked',
		'Episode 9',
		['l_37xXrTyUU']
	],
	[
		'Ava IRL',
		'Part 1: Wake Up Call',
		['rn1-OirIe9g']
	],
	[
		'Ava IRL',
		'Part 2: Rover Robbery',
		['qAVZyLCTFUc']
	],
	[
		'Ava IRL',
		'Part 3: The Pick Up',
		['S035ezmyiuQ']
	],
	[
		'Ava IRL',
		'Part 4: Liquid Therapy',
		['wkJU7bD4rwE']
	],
	[
		'RIFT',
		'Episode 1',
		['yrttazI-UWE']
	],
	[
		'Sandstorm',
		'Operation Sandstorm is launched. A rebel group has taken over part of Daymar. The UEE orders the recapture of a strategic outpost to cripple enemy operations. The secret services confirm the presence of Ground-based air defence systems as well as numerous ground troops. The fight begins.',
		['cN8xJQWkqRk']
	],
	[
		'Cross Over',
		'',
		['fYGtmSQgGhY']
	],
	[
		'Adrift',
		'Part 1',
		['Sb2ihK0ubRA']
	],
	[
		'Last Son of Port Olisar',
		'',
		['clySIQFZiEM']
	],
	[
		'Mega Transporters',
		'Documentary',
		['a6vqFl88OYs', 'MgfD46vjBe8']
	],
	[
		'The Orison Accord',
		'Feature film',
		['ccncLPDRbwk']
	],
	[
		'Legend of the Space Cowboy',
		'Feature film',
		['igg6QIjrYIk']
	]
]
