import React, { useGlobal, useState, setGlobal, getGlobal } from "reactn";
import { View, Text, Image, TouchableOpacity } from "react-native";

export default ({ navigation }) => {
  const winner = navigation.getParam("winner");
  console.log(winner);
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
      <Text>Final Winner is {winner.name}</Text>

      <Image borderRadius={100} source={winner.photo} />
    </View>
  );
};
