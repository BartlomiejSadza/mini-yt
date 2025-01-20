interface Video {
	id: string;
	title: string;
	description: string;
	date: string;
	image: string;
}

interface Category {
	id: string;
	category: string;
	videos: Video[];
}

// Proszę wybaczyć najmocniej, ale musiałem to zrobić. Quota mnie dojechała.

const data: Category[] = [
	{
		id: "1",
		category: "React Native",
		videos: [
			{
				id: "gvkqT_Uoahw",
				title: "React Native in 100 Seconds",
				description:
					"React Native allows developers to build cross-platform apps for iOS, Android, and the Web from a single JavaScript codebase.",
				date: "09/28/2021",
				image: "https://i.ytimg.com/vi/gvkqT_Uoahw/mqdefault.jpg",
			},
			{
				id: "ZBCUegTZF7M",
				title: "React Native Course for Beginners in 2024",
				description:
					"Master the foundations of React Native and build your first full-stack mobile app.",
				date: "04/12/2024",
				image: "https://i.ytimg.com/vi/ZBCUegTZF7M/mqdefault.jpg",
			},
			{
				id: "sm5Y7Vtuihg",
				title: "React Native Full Course for Beginners",
				description:
					"This React Native Course for beginners is an all-in-one tutorial full of over 4 hours of React Native.",
				date: "12/30/2024",
				image: "https://i.ytimg.com/vi/sm5Y7Vtuihg/mqdefault.jpg",
			},
			{
				id: "X8ipUgXH6jw",
				title: "React Native vs Flutter - I built the same chat app with both",
				description:
					"A side-by-side comparison of React Native and Flutter. I built a mobile chat app with both frameworks.",
				date: "10/04/2021",
				image: "https://i.ytimg.com/vi/X8ipUgXH6jw/mqdefault.jpg",
			},
			{
				id: "wOCXNib5s_M",
				title: "The time for React Native is NOW",
				description:
					"React Native has never been better, and 2025 is the year to start building.",
				date: "01/01/2025",
				image: "https://i.ytimg.com/vi/wOCXNib5s_M/mqdefault.jpg",
			},
		],
	},
	{
		id: "2",
		category: "React",
		videos: [
			{
				id: "SqcY0GlETPk",
				title: "React Tutorial for Beginners",
				description:
					"Master React 18 with TypeScript! ⚛️ Build amazing front-end apps with this beginner-friendly tutorial. ❤️ Join this channel to ...",
				date: "03/12/2023",
				image: "https://i.ytimg.com/vi/SqcY0GlETPk/mqdefault.jpg",
			},
			{
				id: "Tn6-PIqc4UM",
				title: "React in 100 Seconds",
				description:
					"React is a little JavaScript library with a big influence over the webdev world. Learn the basics of React in 100 Seconds ...",
				date: "09/08/2020",
				image: "https://i.ytimg.com/vi/Tn6-PIqc4UM/mqdefault.jpg",
			},
			{
				id: "s2skans2dP4",
				title: "React JS Explained In 10 Minutes",
				description:
					"A list of the core concepts every React developer should have a solid grasp on. React Course: ...",
				date: "11/06/2021",
				image: "https://i.ytimg.com/vi/s2skans2dP4/mqdefault.jpg",
			},
			{
				id: "wIyHSOugGGw",
				title: "Every React Concept Explained in 12 Minutes",
				description: "My React course: https://reactbootcamp.dev Chapters: ...",
				date: "03/18/2024",
				image: "https://i.ytimg.com/vi/wIyHSOugGGw/mqdefault.jpg",
			},
			{
				id: "x4rFhThSX04",
				title:
					"Learn React JS - Full Beginner’s Tutorial (2024) & Practice Projects",
				description:
					"Learn modern React basics in the most interactive, hands-on way possible in the full course for beginners. Throughout this tutorial ...",
				date: "11/20/2024",
				image: "https://i.ytimg.com/vi/x4rFhThSX04/mqdefault.jpg",
			},
		],
	},
	{
		id: "3",
		category: "TypeScript",
		videos: [
			{
				id: "zQnBQ4tB3ZA",
				title: "TypeScript in 100 Seconds",
				description:
					"Learn the basics if TypeScript in 100 Seconds! If you love TS, upgrade to Fireship PRO for 40% off using code mbus5Kcj at ...",
				date: "11/25/2020",
				image: "https://i.ytimg.com/vi/zQnBQ4tB3ZA/mqdefault.jpg",
			},
			{
				id: "ahCwqrYpIuM",
				title: "TypeScript - The Basics",
				description:
					"TypeScript has forever altered the lives of JavaScript developers. Learn why TS is so awesome and the basic concepts required to ...",
				date: "11/29/2018",
				image: "https://i.ytimg.com/vi/ahCwqrYpIuM/mqdefault.jpg",
			},
			{
				id: "5ChkQKUzDCs",
				title: "Big projects are ditching TypeScript… why?",
				description:
					"Why are some big open-source projects like Turbo and Svelte dropping TypeScript in favor of vanilla JavaScript? Learn about the ...",
				date: "09/07/2023",
				image: "https://i.ytimg.com/vi/5ChkQKUzDCs/mqdefault.jpg",
			},
			{
				id: "d56mG7DezGs",
				title: "TypeScript Tutorial for Beginners",
				description:
					"Write better, more scalable JavaScript with TypeScript! This beginner-friendly tutorial gets you started fast. ❤️ Join this ...",
				date: "05/23/2022",
				image: "https://i.ytimg.com/vi/d56mG7DezGs/mqdefault.jpg",
			},
			{
				id: "b598TqLzBb4",
				title: "TypeScript за 2 минуты",
				description:
					"Подпишись на мой Telegram: https://t.me/js_by_vladilen TypeScript за 2 минуты Попробовал новый формат на Youtube, когда ...",
				date: "12/15/2022",
				image: "https://i.ytimg.com/vi/b598TqLzBb4/mqdefault.jpg",
			},
		],
	},
	{
		id: "4",
		category: "JavaScript",
		videos: [
			{
				id: "lkIFF4maKMU",
				title: "100+ JavaScript Concepts you Need to Know",
				description:
					"The ultimate 10 minute JavaScript course that quickly breaks down over 100 key concepts every web developer should know.",
				date: "11/22/2022",
				image: "https://i.ytimg.com/vi/lkIFF4maKMU/mqdefault.jpg",
			},
			{
				id: "DHjqpvDnNGE",
				title: "JavaScript in 100 Seconds",
				description:
					"JavaScript is the the programming language that built the web. Learn how it evolved into a powerful tool for building websites, ...",
				date: "01/13/2022",
				image: "https://i.ytimg.com/vi/DHjqpvDnNGE/mqdefault.jpg",
			},
			{
				id: "W6NZfCO5SIk",
				title:
					"JavaScript Course for Beginners – Your First Step to Web Development",
				description:
					"Learn JavaScript basics with this quick, beginner-friendly course! ⚡ Perfect for new coders ready to build real skills and start ...",
				date: "04/24/2018",
				image: "https://i.ytimg.com/vi/W6NZfCO5SIk/mqdefault.jpg",
			},
			{
				id: "EerdGm-ehJQ",
				title: "JavaScript Tutorial Full Course - Beginner to Pro (2024)",
				description:
					"Certificates are now available! https://courses.supersimple.dev/courses/javascript Enroll to get a Certificate of Completion and ...",
				date: "05/09/2024",
				image: "https://i.ytimg.com/vi/EerdGm-ehJQ/mqdefault.jpg",
			},
			{
				id: "aXOChLn5ZdQ",
				title: "JavaScript for the Haters",
				description:
					"Why does everybody hate JavaScript so much? A complete roast of JS that highlights the strongest criticisms against the world's ...",
				date: "11/24/2022",
				image: "https://i.ytimg.com/vi/aXOChLn5ZdQ/mqdefault.jpg",
			},
		],
	},
];

export default data;
