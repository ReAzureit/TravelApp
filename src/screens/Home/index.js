import React, { useEffect, useState } from "react";
import { SafeAreaView, View, FlatList } from "react-native";
import Categories from "../../components/Categories";
import Title from "../../components/Title";
import { styles } from "./styles";
import AttractionCard from "../../components/AttractionCard";
import attractions from "../../data/attractions.json";

const Home = () => {
	const [selectedCategory, setSelectedCategory] = useState("All");
	const [attractionData, setAttractionData] = useState([]);

	useEffect(() => {
		setAttractionData(attractions);
	}, []);

	return (
		<SafeAreaView style={styles.container}>
			<FlatList
				data={attractionData}
				keyExtractor={(item) => String(item.id)}
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
							categories={[
								"All",
								"Popular",
								"Recommended",
								"Random",
								"Most Viewed",
								"Most Visited"
							]}
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
