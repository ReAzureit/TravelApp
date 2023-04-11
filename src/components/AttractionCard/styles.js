import { StyleSheet, Dimensions } from "react-native";
const { width } = Dimensions.get("window");
export const styles = StyleSheet.create({
	card: {
		marginRight: 16,
		padding: 4,
		borderWidth: 1,
		borderColor: "#E2E2E2",
		borderRadius: 15
	},
	image: { width: (width - 96) / 2, height: 120, borderRadius: 15 },
	title: {
		color: "black",
		fontSize: 12,
		fontWeight: "500",
		marginTop: 12,
		marginLeft: 6
	},
	subtitle: {
		color: "rgba(0,0,0,0.5)",
		fontSize: 10,
		fontWeight: "300"
	},
	subtitleContainer: {
		alignItems: "center",
		flexDirection: "row",
		marginBottom: 12,
		marginLeft: 6,
		marginTop: 4
	},
	icon: {
		width: 10,
		height: 10,
		marginRight: 6
	}
});
