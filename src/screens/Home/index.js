import React, { useState } from "react";
import { SafeAreaView, View } from "react-native";
import Categories from "../../components/Categories";
import Title from "../../components/Title";
import { styles } from "./styles";

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
			</View>
		</SafeAreaView>
	);
};

export default Home;
