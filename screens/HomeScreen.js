import React from "react";
import { StatusBar } from "expo-status-bar";
import {
	FlatList,
	StyleSheet,
	Text,
	ScrollView,
	View,
	SafeAreaView,
	Dimensions,
} from "react-native";
import ProfileSection from "../components/ProfileSection";
const data = [
	{
		id: "1",
		name: "Giorgio Pizzati",
		image: "https://ta.azureedge.net/p/images/usuarios/l/98qVP7jV2Eh3InyGJQENRbRg5vxPukWW0.jpg/300x300cut/",
		description:
			"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
		interests: { spotify: ["ACDC", "J-ax"], books: ["Harry Potter"] },
	},
	{
		id: "2",
		name: "Giorgio Pizzati",
		image: "https://ta.azureedge.net/p/images/usuarios/l/98qVP7jV2Eh3InyGJQENRbRg5vxPukWW0.jpg/300x300cut/",
		description:
			"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
		interests: { spotify: ["ACDC"], books: ["Harry Potter"] },
	},
	{
		id: "3",
		name: "Giorgio Pizzati",
		image: "https://ta.azureedge.net/p/images/usuarios/l/98qVP7jV2Eh3InyGJQENRbRg5vxPukWW0.jpg/300x300cut/",
		description:
			"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
		interests: { spotify: ["ACDC"], books: ["Harry Potter"] },
	},
];

const HomeScreen = () => {
	return (
		<SafeAreaView
			style={{
				flex: 1,
				marginTop: StatusBar.currentHeight || 0,
				// height: "100%",
			}}>
			<FlatList
				data={data}
				keyExtractor={(item) => item.id}
				ItemSeparatorComponent={() => (
					<View
						style={{
							height: 1,
							backgroundColor: "#cccccc",
							marginLeft: 30,
							marginRight: 30,
						}}
					/>
				)}
				renderItem={({ item }) => <ProfileSection item={item} />}
				snapToInterval={Dimensions.get("window").height}
				snapToAlignment='start'
				decelerationRate={0}
				bounces={false}
				contentContainerStyle={{ display: "flex", flexGrow: 1 }}
				// style={{ height: "100%", flexGrow: 0 }}
			/>
		</SafeAreaView>
	);
};

export default HomeScreen;

const styles = StyleSheet.create({});
