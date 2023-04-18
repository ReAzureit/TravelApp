import { StyleSheet, Dimensions } from "react-native";
const { height } = Dimensions.get("window");
export const styles = StyleSheet.create({
	container: { flex: 1, margin: 32 },
	mainImage: {
		width: "100%",
		height: height / 2,
		justifyContent: "space-between",
		alignItems: "center"
	},
	header: {
		width: "100%",
		flexDirection: "row",
		justifyContent: "space-between",
		alignItems: "center"
	},
	icon: {
		width: 36,
		height: 36,
		margin: 16
	},
	footer: {
		flexDirection: "row",
		alignItems: "center",
		justifyContent: "center",
		borderRadius: 15,
		backgroundColor: "rgba(256,256,256,0.35)",
		margin: 16,
		paddingHorizontal: 8
	},
	miniImage: {
		width: 40,
		height: 40,
		marginHorizontal: 4,
		marginVertical: 8,
		borderRadius: 10
	},
	moreImages: { color: "white", fontWeight: "bold", fontSize: 20 },
	moreImagesContainer: {
		position: "absolute",
		backgroundColor: "rgba(0,0,0,0.38)",
		width: 40,
		height: 40,
		top: 8,
		left: 4,
		borderRadius: 10,
		justifyContent: "center",
		alignItems: "center"
	},
	headerContainer: {
		flexDirection: "row",
		justifyContent: "space-between",
		alignItems: "center",
		marginVertical: 40
	},
	textContainer: {},
	title: { color: "black" },
	city: { fontSize: 20, fontWeight: "400", color: "black", marginTop: 8 }
});
