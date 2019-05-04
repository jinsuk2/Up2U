import React, {
  useGlobal,
  useEffect,
  useState,
  setGlobal,
  getGlobal
} from "reactn";
import { View, Text, Image, TouchableOpacity } from "react-native";

export default ({ navigation }) => {
  const winner = navigation.getParam("winner");
  const players = navigation.getParam("originalUser");
  const [winnerList, setWinnerList] = useGlobal("winnerList");

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

      <Image
        borderRadius={100}
        style={{ width: 100, height: 50 }}
        source={{ uri: winner.photo }}
      />
      <TouchableOpacity
        onPress={() => {
          setGlobal({ winnerList: [...winnerList, winner] });
          navigation.navigate("Game", { players: players });
        }}
      >
        <Text>One more?</Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => {
          setGlobal({ winnerList: [...winnerList, winner] }).then;
          const globalVar = getGlobal();
          console.log(globalVar);
          navigation.navigate("Award", {
            winner: globalVar.winnerList,
            players: players
          });
        }}
      >
        <Text>Done</Text>
      </TouchableOpacity>
    </View>
  );
};
