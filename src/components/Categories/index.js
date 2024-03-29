import React from "react";
import { FlatList, Text, TouchableOpacity } from "react-native";
import { styles } from "./styles";

const Categories = ({ selectedCategories, categories, onCategoryPress }) => {
	return (
		<FlatList
			horizontal
			showsHorizontalScrollIndicator={false}
			keyExtractor={(item) => item}
			data={categories}
			renderItem={({ item, index }) => (
				<TouchableOpacity
					style={styles.categoriesContainer(
						selectedCategories === item,
						index === 0
					)}
					onPress={() => onCategoryPress(item)}
				>
					<Text style={styles.categoriesTitle(selectedCategories === item)}>
						{item}
					</Text>
				</TouchableOpacity>
			)}
		/>
	);
};

export default React.memo(Categories);
