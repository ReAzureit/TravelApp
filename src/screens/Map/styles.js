const { StyleSheet, Dimensions } = require("react-native");
const { width } = Dimensions.get("window");
export const styles = StyleSheet.create({
	mapContainer: { flex: 1 },
	map: { width: "100%", height: "100%" },
	header: {
		position: "absolute",
		top: 40,
		backgroundColor: "white",
		borderRadius: 15,
		flex: 1,
		padding: 16,
		flexDirection: "row",
		width: width - 48,
		margin: 24,
		alignItems: "center"
	},
	title: { fontSize: 20, color: "black" },
	icon: { width: 50, height: 50, marginRight: 16 }
});
