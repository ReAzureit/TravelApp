import React from "react";
import { Image, TouchableOpacity, FlatList, SafeAreaView } from "react-native";
import { styles } from "./styles";

const Gallery = ({ navigation, route }) => {
	const { images } = route?.params || {};
	const onBack = () => {
		navigation.goBack();
	};

	return (
		<SafeAreaView style={styles.container}>
			<FlatList
				style={styles.listContainer}
				data={images}
				renderItem={({ item }) => (
					<Image source={{ uri: item }} style={styles.image} />
				)}
			/>
			<TouchableOpacity
				style={styles.backContainer}
				onPress={onBack}
				hitSlop={8}
			>
				<Image
					style={styles.backIcon}
					source={require("../../assets/back.png")}
				/>
			</TouchableOpacity>
		</SafeAreaView>
	);
};
export default React.memo(Gallery);
