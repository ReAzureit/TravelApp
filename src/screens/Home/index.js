import React, { useState } from "react";
import { SafeAreaView, View } from "react-native";
import Categories from "../../components/Categories";
import Title from "../../components/Title";
import { styles } from "./styles";
import AttractionCard from "../../components/AttractionCard";

const Home = () => {
	const [selectedCategory, setSelectedCategory] = useState("All");
	return (
		<SafeAreaView style={styles.container}>
			<View style={styles.containerMargin}>
				<Title style={[styles.title, styles.fontNormal]} title={"Where do"} />
				<Title
					style={[styles.title, styles.fontBold]}
					title={"you want to go? "}
				/>
				<Title
					style={[styles.subTitle, styles.fontBold]}
					title={"Explore Attractions? "}
				/>
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
				<View style={styles.attractionContainer}>
					<AttractionCard
						title={"Entertaiment Park"}
						subtitle={"Rome"}
						imageSrc={
							"https://a.cdn-hotels.com/gdcs/production122/d885/0cfe7615-23d4-42b5-a11c-ed1ebbcea03b.jpg"
						}
					/>
					<AttractionCard
						title={"Entertaiment Park"}
						subtitle={"Rome"}
						imageSrc={
							"https://a.cdn-hotels.com/gdcs/production122/d885/0cfe7615-23d4-42b5-a11c-ed1ebbcea03b.jpg"
						}
					/>
				</View>
			</View>
		</SafeAreaView>
	);
};

export default Home;
