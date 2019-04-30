import React, { useEffect } from "react";
import { View, Text, Image, TouchableOpacity } from "react-native";
import { Input } from "react-native-elements";
import Orientation from "react-native-orientation";


export default ({ navigation }) => {
  const winner = navigation.getParam("winner");
  useEffect(() => {
    Orientation.lockToPortrait();
  });
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
      <Input placeholder="Write something to the winner! Congrat him? Make a Request! Leave a comment, be creative!" />
      <Image borderRadius={100} source={winner[0].photo} />
      <TouchableOpacity onPress={()=>{
        navigation.navigate("Reveal",{msg:"hi guys"})
      }}><Text>Click to send</Text></TouchableOpacity>
    </View>
  );
};
