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
import Share from "react-native-share";
import ImgToBase64 from "react-native-image-base64";

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
	const showFullSCreenMap = () => {
		navigation.navigate("Map", { item });
	};
	const onShare = async () => {
		try {
			const imageWithoutParams = mainImage.split("?")[0];
			const imageParts = imageWithoutParams.split(".");
			const imageExtension = imageParts[imageParts.length - 1];
			const base64Image = await ImgToBase64.getBase64String(mainImage);
			Share.open({
				title: item?.name,
				url: `data:image/${imageExtension || "jpg"};base64,${base64Image}`,
				message: "Hey, I wanted to share this amazing attractions"
			});
		} catch (e) {
			return;
		}
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
						<Pressable onPress={onShare} hitSlop={8}>
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
				<Text onPress={showFullSCreenMap} style={styles.showFullScreenText}>
					Show full screen map
				</Text>
			</ScrollView>
		</SafeAreaView>
	);
};

export default AttractionDetails;
