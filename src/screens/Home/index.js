import React, { useEffect, useState } from "react";
import { SafeAreaView, View, FlatList, Text } from "react-native";
import Categories from "../../components/Categories";
import Title from "../../components/Title";
import { styles } from "./styles";
import AttractionCard from "../../components/AttractionCard";
import attractions from "../../data/attractions.json";
import categories from "../../data/categories.json";
const Home = () => {
	const [selectedCategory, setSelectedCategory] = useState("All");
	const [attractionData, setAttractionData] = useState([]);

	useEffect(() => {
		setAttractionData(attractions);
	}, []);
	useEffect(() => {
		if (selectedCategory === "All") {
			setAttractionData(attractions);
		} else {
			const filteredData = attractions.filter((item) =>
				item?.categories.includes(selectedCategory)
			);
			setAttractionData(filteredData);
		}
	}, [selectedCategory]);
	return (
		<SafeAreaView style={styles.container}>
			<FlatList
				data={attractionData}
				keyExtractor={(item) => String(item.id)}
				ListEmptyComponent={
					<Text style={styles.emptyText}>No items found</Text>
				}
				ListHeaderComponent={
					<>
						<View style={styles.titleContainer}>
							<Title
								style={[styles.title, styles.fontNormal]}
								title={"Where do"}
							/>
							<Title
								style={[styles.title, styles.fontBold]}
								title={"you want to go? "}
							/>
							<Title
								style={[styles.subTitle, styles.fontBold]}
								title={"Explore Attractions? "}
							/>
						</View>
						<Categories
							selectedCategories={selectedCategory}
							onCategoryPress={setSelectedCategory}
							categories={["All", ...categories]}
						/>
					</>
				}
				numColumns={2}
				renderItem={({ item, index }) => (
					<AttractionCard
						cardStyle={
							index % 2 === 0 ? { marginRight: 12, marginLeft: 32 } : {}
						}
						title={item.name}
						subtitle={item.city}
						imageSrc={
							item.images?.length
								? item.images[0]
								: "https://a.cdn-hotels.com/gdcs/production122/d885/0cfe7615-23d4-42b5-a11c-ed1ebbcea03b.jpg"
						}
					/>
				)}
			/>
		</SafeAreaView>
	);
};

export default Home;
