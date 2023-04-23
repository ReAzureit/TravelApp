import { useNavigation } from "@react-navigation/native";
import React from "react";
import {
	ImageBackground,
	SafeAreaView,
	View,
	Text,
	Image,
	Pressable
} from "react-native";
import MapView, { Marker } from "react-native-maps";
import { styles } from "./styles";
import Title from "../../components/Title";
import InfoCard from "../../components/InfoCard";
import { ScrollView } from "react-native-gesture-handler";

const AttractionDetails = ({ route }) => {
	const { item } = route?.params || {};
	const images = item?.images?.length ? item?.images : null;
	const mainImage = images?.length ? images[0] : null;
	const slicedImages = images?.length ? images.slice(0, 5) : [];
	const diffImages = images?.length - slicedImages.length;
	const navigation = useNavigation();
	const coordinate = {
		latitude: item?.coordinates?.lat,
		longitude: item?.coordinates?.lon,
		longitudeDelta: 0.009,
		latitudeDelta: 0.009
	};
	const onBack = () => {
		navigation.goBack();
	};
	const onGalleryNavigate = () => {
		navigation.navigate("Gallery", { images: item?.images });
	};
	return (
		<SafeAreaView style={styles.container}>
			<ScrollView showsVerticalScrollIndicator={false}>
				<ImageBackground
					style={styles.mainImage}
					imageStyle={{ borderRadius: 20 }}
					source={{ uri: mainImage }}
				>
					<View style={styles.header}>
						<Pressable onPress={onBack} hitSlop={8}>
							<Image
								style={styles.icon}
								source={require("../../assets/back.png")}
							/>
						</Pressable>
						<Pressable hitSlop={8}>
							<Image
								style={styles.icon}
								source={require("../../assets/share.png")}
							/>
						</Pressable>
					</View>
					<Pressable onPress={onGalleryNavigate} style={styles.footer}>
						{slicedImages?.length
							? slicedImages.map((image, index) => {
								return (
									<View key={index}>
										<Image
											style={styles.miniImage}
											key={image}
											source={{ uri: image }}
										/>
										{diffImages > 0 && index === slicedImages?.length - 1 ? (
												<View style={styles.moreImagesContainer}>
													<Text
														style={styles.moreImages}
													>{`+${diffImages}`}</Text>
												</View>
											) : null}
									</View>
								);
							  })
							: null}
					</Pressable>
				</ImageBackground>
				<View style={styles.headerContainer}>
					<View style={styles.textContainer}>
						<Title style={styles.title} title={item?.name} />
						<Text style={styles.city}>{item?.city}</Text>
					</View>
					<Title style={styles.title} title={item?.entry_price} />
				</View>

				<InfoCard
					title={item?.address}
					icon={require("../../assets/locationCircle.png")}
				/>
				<InfoCard
					title={`OPEN
${item?.opening_time} - ${item?.closing_time}`}
					icon={require("../../assets/schedule.png")}
				/>
				<MapView style={styles.mapContainer} initialRegion={coordinate}>
					<Marker coordinate={coordinate} title={item?.name} />
				</MapView>
			</ScrollView>
		</SafeAreaView>
	);
};

export default AttractionDetails;
