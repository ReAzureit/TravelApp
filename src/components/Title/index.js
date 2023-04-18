import React from "react";
import { Text } from "react-native";
import { styles } from "./styles";

const Title = ({ style, title }) => {
	return <Text style={[styles.title, style]}>{title}</Text>;
};

Title.defaultProps = {
	title: "Default Title"
};

export default React.memo(Title);
