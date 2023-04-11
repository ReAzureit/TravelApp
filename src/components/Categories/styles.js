import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
	categoriesTitle: (selected) => ({
		marginRight: 17,
		color: selected ? "rgba(0,0,0,1)" : "rgba(0,0,0,0.5)",
		fontSize: 12,
		paddingVertical: 16,
		textDecorationLine: selected ? "underline" : "none"
	})
});
