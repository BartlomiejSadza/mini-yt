import { useState, useEffect } from "react";
import { Text } from "react-native";
import fetchVideos from "data/api_fetch";

export default function Search() {
	const [data, setData] = useState<any>(null);

	useEffect(() => {
		const fetchData = async () => {
			const result = await fetchVideos();
			setData(result);
		};
		fetchData();
	}, []);

	return <Text>{data ? JSON.stringify(data) : "Loading..."}</Text>;
}
