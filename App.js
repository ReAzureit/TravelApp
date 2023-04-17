import React from "react";
import "react-native-gesture-handler";
import Home from "./src/screens/Home";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import AttractionDetails from "./src/screens/AttractionDetails";
const Stack = createStackNavigator();
const App = () => {
	return (
		<NavigationContainer>
			<Stack.Navigator screenOptions={{ headerShown: false }}>
				<Stack.Screen name="Home" component={Home} />
				<Stack.Screen name="AttractionDetails" component={AttractionDetails} />
			</Stack.Navigator>
		</NavigationContainer>
	);
};

export default App;
