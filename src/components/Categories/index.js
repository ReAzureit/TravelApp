import React from "react";
import { FlatList, Text, TouchableOpacity } from "react-native";
import { styles } from "./styles";

const Categories = ({ selectedCategories, categories, onCategoryPress }) => {
	return (
		<FlatList
			horizontal
			showsHorizontalScrollIndicator={false}
			data={categories}
			renderItem={({ item }) => (
				<TouchableOpacity
					onPress={() => {
						onCategoryPress(item);
					}}
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
