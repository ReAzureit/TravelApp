import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
	categoriesTitle: (selected) => ({
		color: selected ? "rgba(0,0,0,1)" : "rgba(0,0,0,0.5)",
		fontSize: 12,
		paddingVertical: 2
	}),
	categoriesContainer: (selected, firstIndex) => ({
		marginRight: 17,
		borderBottomColor: "#4681A3",
		fontSize: 12,
		marginBottom: 14,
		borderBottomWidth: selected ? 1 : 0,
		marginLeft: firstIndex ? 32 : 0
	})
});
