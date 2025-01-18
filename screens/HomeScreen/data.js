const data = [
	{
		id: "1",
		category: "React Native",
		videos: [
			{
				id: "101",
				title: "React Native in 100 seconds",
				description:
					"Lorem ipsum dolor sit amet, consectetur adipiscing elit...",
				date: "12.08.2024",
				image:
					"data:image/jpeg;base64,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", // Placeholder for thumbnail
			},
			{
				id: "102",
				title: "React Native Introduction",
				description:
					"Lorem ipsum dolor sit amet, consectetur adipiscing elit...",
				date: "12.08.2024",
				image: "https://via.placeholder.com/150",
			},
		],
	},
	{
		id: "2",
		category: "React",
		videos: [
			{
				id: "201",
				title: "React Introduction",
				description:
					"Lorem ipsum dolor sit amet, consectetur adipiscing elit...",
				date: "12.08.2024",
				image: "https://via.placeholder.com/150",
			},
		],
	},
	{
		id: "3",
		category: "Typescript",
		videos: [
			{
				id: "301",
				title: "Typescript Intro & Setup",
				description:
					"Lorem ipsum dolor sit amet, consectetur adipiscing elit...",
				date: "12.08.2024",
				image: "https://via.placeholder.com/150",
			},
		],
	},
];

export default data;

// TODO: YouTube API to fetch videos