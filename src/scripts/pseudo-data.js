export default {
	primaries: [
		{
			primaryTitle: 'Big Primary Name',
			primaryID: 1234,
			races: [
				{
					isRepublican: true,
					title: 'A Republican Primary',
					candidates: [
						{
							name: 'A republican',
							val: 40,
						},
						{
							name: 'Another republican',
							val: 28,
						},
						{
							name: 'A third republican',
							val: 22,
						},
						{
							name: 'A fourth republican',
							val: 10,
						},
					],
					source: 'Associated Press',
					source_url: 'https://www.expressnews.com/',
				},
				{
					isRepublican: false,
					title: 'A Democratic Primary',
					candidates: [
						{
							name: 'A democrat',
							val: 40,
						},
						{
							name: 'Another democrat',
							val: 28,
						},
						{
							name: 'A third democrat',
							val: 22,
						},
						{
							name: 'A fourth democrat',
							val: 10,
						},
					],
					source: 'Associated Press',
					source_url: 'https://www.expressnews.com/',
				},
			}
		},
	],
};