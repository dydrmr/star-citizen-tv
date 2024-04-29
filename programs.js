const programs = [
	[
		'Stanton Today',
		'2950-01-16: Mass arrests in Lorville',
		['YUx8W-dt1NA']
	], [
		'Stanton Today',
		'2950-01-21: Why are people standing up?',
		['Ts2XbS6AJYU']
	],
	[
		'Stanton Today',
		'2950-09-08: Mira Ngo Interview',
		['EYhub_sugUY']
	],
	[
		'Stanton Today',
		'2950-07-20: Standing Chair Protestors',
		['a6fSj2lN1MY']
	],
	[
		'Stanton Today',
		'2950-06-30: GrimHEX Renovations',
		['S80Cmx_FrAc']
	],
	[
		'Stanton Today',
		'2950-06-08: Invictus Lanuch Week Recap',
		['Uo-9Y_ldu2k']
	],
	[
		'The Spin',
		'Nature and Well-Being',
		['tu5FSFzm0qk']
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
	]
]
