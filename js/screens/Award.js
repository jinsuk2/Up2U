import React, { useGlobal, useState, setGlobal, getGlobal } from "reactn";
import { View, Text, Image, TouchableOpacity } from "react-native";

export default ({ navigation }) => {
  const winner = navigation.getParam("winner");

  const winnerMap = {};
  winner.forEach(user => {
    if (winnerMap[user.name]) {
      winnerMap[user.name]++;
    } else {
      winnerMap[user.name] = 1;
    }
  });
  const firstWinner = Object.keys(winnerMap).reduce((a, b) =>
    winnerMap[a] > winnerMap[b] ? a : b
  );
  winner.filter(obj => obj.name === firstWinner);
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
      <Text>Final Winner is {winner[0].name}</Text>

      <Image borderRadius={100} source={winner[0].photo} />
    </View>
  );
};
