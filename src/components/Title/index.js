import React from "react";
import { Text } from "react-native";

const Title = ({ style, title }) => {
	return <Text style={style}>{title}</Text>;
};

Title.defaultProps = {
	title: "Default Title"
};

export default React.memo(Title);
