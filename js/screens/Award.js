import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  ImageBackground
} from "react-native";
import { Input } from "react-native-elements";
import Orientation from "react-native-orientation";
import NeonIcon from "../components/NeonIcon";
import NeonSign from "../components/NeonSign";

export default ({ navigation }) => {
  const winner = navigation.getParam("winner");
  const players = navigation.getParam("players");
  const [msg, setMsg] = useState("");
  useEffect(() => {
    Orientation.lockToPortrait();
  }, []);
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

  const finalWinner = winner.find(temp => {
    return temp.name == firstWinner;
  });
  console.log(finalWinner);
  console.log(typeof finalWinner);
  // winner.filter(obj => obj.name == firstWinner);
  return (
    <ImageBackground
      source={require("../../assets/wallbg.jpg")}
      style={{ width: "100%", height: "100%" }}
    >
      <View
        style={{
          paddingTop: 100,
          justifyContent: "center",
          alignItems: "center"
        }}
      >
        <NeonIcon name={"crown"} />

        {/* <Text>Final Winner is {firstWinner}</Text> */}
        <NeonSign size={30} name={`Final Winner is ${firstWinner}`} />

        <Input
          onChangeText={text => setMsg({ text })}
          value={msg}
          placeholder="Write something to the winner! Congrat him? Make a Request! Leave a comment, be creative!"
        />
        {/* <Image
          style={{ height: 100, width: 80 }}
          borderRadius={100}
          source={{ uri: finalWinner.photo }}
        /> */}
        <NeonSign
          size={20}
          onPress={() => {
            console.log(msg);
            navigation.navigate("Reveal", {
              msg: msg.text,
              winner: finalWinner,
              players: players
            });
          }}
          name={"Click to send"}
        />
        {/* <TouchableOpacity disabled={msg ? false : true}>
          <Text>Click to send</Text>
        </TouchableOpacity> */}
      </View>
    </ImageBackground>
  );
};
