import React, { useGlobal, useState, setGlobal, getGlobal } from "reactn";
import { View, Text, Image, TouchableOpacity } from "react-native";

export default ({ navigation }) => {
  const winner = navigation.getParam("winner");
  const [winnerList, setWinnerList] = useGlobal("winnerList");
  console.log(typeof(winner.photo));

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
        source={
          require("../../assets/crown.png")
      }
      />
      <Text>Winner is {winner.name}</Text>

      <Image borderRadius={100} style={{ width: 100, height: 50 }} source={{uri: winner.photo}} />
      <TouchableOpacity
        onPress={() => {
          setGlobal({ winnerList: [...winnerList, winner] });
          navigation.navigate("Start");
        }}
      >
        <Text>One more?</Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => {
          setGlobal({ winnerList: [...winnerList, winner] });
          console.log(getGlobal().winnerList);
          navigation.navigate("Award", {
            winner: getGlobal().winnerList
          });
        }}
      >
        <Text>Done</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={()=>{
        console.log(winner.photo)
      }}><Text>Debug Button</Text></TouchableOpacity>
    </View>
  );
};
