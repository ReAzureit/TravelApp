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
import { styles } from "./styles";
import Title from "../../components/Title";
import InfoCard from "../../components/InfoCard";

const AttractionDetails = ({ route }) => {
	const { item } = route?.params || {};
	const images = item?.images?.length ? item?.images : null;
	const mainImage = images?.length ? images[0] : null;
	const slicedImages = images?.length ? images.slice(0, 5) : [];
	const diffImages = images?.length - slicedImages.length;
	const navigation = useNavigation();
	const onBack = () => {
		navigation.goBack();
	};
	return (
		<SafeAreaView style={styles.container}>
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
				<Pressable style={styles.footer}>
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
		</SafeAreaView>
	);
};

export default AttractionDetails;
