import React from "react";
import { View, Image, Pressable, Text } from "react-native";
import { styles } from "./styles";
import MapView, { Marker } from "react-native-maps";

const Map = ({ navigation, route }) => {
	const { item } = route?.params || {};
	const coordinate = {
		latitude: item?.coordinates?.lat,
		longitude: item?.coordinates?.lon,
		longitudeDelta: 0.009,
		latitudeDelta: 0.009
	};
	const onBack = () => navigation.goBack();
	return (
		<View style={styles.mapContainer}>
			<MapView style={styles.map} initialRegion={coordinate}>
				<Marker coordinate={coordinate} title={item?.name} />
			</MapView>
			<View style={styles.header}>
				<Pressable onPress={onBack} hitSlop={8}>
					<Image
						style={styles.icon}
						source={require("../../assets/back.png")}
					/>
				</Pressable>
				<Text style={styles.title}>{`${item?.name}, ${item?.city}`}</Text>
			</View>
		</View>
	);
};

export default React.memo(Map);
