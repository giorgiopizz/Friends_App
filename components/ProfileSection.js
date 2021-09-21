import React from "react";
import {
	StyleSheet,
	Text,
	TouchableOpacity,
	View,
	Image,
	Dimensions,
} from "react-native";
const capitalize = (str) => {
	const lower = str.toLowerCase();
	return str.charAt(0).toUpperCase() + lower.slice(1);
};
const ProfileSection = ({ item }) => {
	return (
		<View style={styles.post}>
			<TouchableOpacity>
				<Text style={{ fontSize: 24, paddingLeft: 20 }}>
					{item.name}
				</Text>
			</TouchableOpacity>
			<Image
				source={{ uri: item.image }}
				style={{
					// flex: 1,
					// aspectRatio: 1,
					height: "50%",
					width: "100%",
					// marginTop: 30,
					// alignSelf: "center",
					resizeMode: "contain",
				}}
			/>
			<Text style={{ textAlign: "justify" }}>{item.description}</Text>
			{Object.keys(item.interests).map((element, index) => (
				<View
					key={index}
					style={{
						backgroundColor: "green",
						borderRadius: 5,
						alignSelf: "flex-start",
					}}>
					<Text>{capitalize(element)} :</Text>
					<Text>
						{item.interests[element].map((elm, index2) => (
							<View
								key={index2}
								style={{
									padding: 10,
									backgroundColor: "#00eeee",
									alignSelf: "flex-start",
									borderRadius: 10,
								}}>
								<Text>{elm}</Text>
							</View>
						))}
					</Text>
				</View>
			))}
		</View>
	);
};

export default ProfileSection;

const styles = StyleSheet.create({
	post: {
		padding: 30,
		// backgroundColor: "pink",
		height: Dimensions.get("window").height - 2,
	},
	postImage: {
		width: "100%",
		height: "100%",
		resizeMode: "contain",

		alignSelf: "center",
	},
});
