import React from "react";
import { View, Text, Image, TouchableOpacity } from "react-native";
export default ({ navigation }) => {
  const winner = navigation.getParam("winner");
  return (
    <View
      style={{
        padding: 20,
        justifyContent: "center",
        alignItems: "center"
      }}
    >
      <Image
        style={{ width: 100, height: 50 }}
        source={require("../../assets/crown.png")}
      />
      <Text>Winner is {winner.name}</Text>

      <Image borderRadius={100} source={winner.photo} />
      <TouchableOpacity
        onPress={() => {
          navigation.navigate("Game");
        }}
      >
        <Text>One more?</Text>
      </TouchableOpacity>
    </View>
  );
};
