import React, { useState, useEffect } from "react";
import { View, TouchableOpacity, Vibration, Text } from "react-native";
import CountDown from "react-native-countdown-component";
import Orientation from "react-native-orientation";
const PlayerCard = ({ player, color, onPress }) => {
  return (
    <TouchableOpacity
      onPress={() => {
        onPress();
        Vibration.vibrate();
      }}
      style={{
        height: "100%",
        width: "50%",
        backgroundColor: color,
        justifyContent: "center",
        alignItems: "center"
      }}
    >
      <Text>{player.name}</Text>
    </TouchableOpacity>
  );
};
const shuffle = array => {
  return array.sort(() => Math.random() - 0.5);
};
export default props => {
  console.log(props);
  useEffect(() => {
    Orientation.lockToLandscape(); //this will lock the view to Portrait
    //Orientation.lockToLandscape(); //this will lock the view to Landscape
    //Orientation.unlockAllOrientations(); //this will unlock the view to all Orientations
  });
  const testUsers = [
    { name: "1", photo: "aa", didWin: true },
    { name: "2", photo: "bb", didWin: true },
    { name: "3", photo: "cc", didWin: true },
    { name: "4", photo: "dd", didWin: true },
    { name: "5", photo: "aa", didWin: true },
    { name: "6", photo: "bb", didWin: true },
    { name: "7", photo: "cc", didWin: true },
    { name: "8", photo: "dd", didWin: true }
  ];
  const [users, setUsers] = useState(testUsers);
  const [pointer, setPointer] = useState(0);
  const [counter, setCounter] = useState(3 * users.length);
  return (
    <View style={{ flexDirection: "row", height: "100%" }}>
      <CountDown
        style={{
          position: "absolute",
          left: 0,
          right: 0,
          bottom: "50%",
          zIndex: 1
        }}
        until={counter}
        size={30}
        onFinish={() => {}}
        digitStyle={{ backgroundColor: "#FFF" }}
        digitTxtStyle={{ color: "black" }}
        timeToShow={["S"]}
        timeLabels={{ s: "" }}
      />
      <PlayerCard
        player={users[pointer]}
        color="red"
        onPress={() => {
          users[pointer + 1].didWin = false;

          if (users.length == 2) {
            console.log("The winner is", users[pointer].name);
            props.navigation.navigate("Award");
          } else if (users.length <= pointer + 3) {
            setPointer(0);
            const newUser = users.filter(user => user.didWin);

            setUsers(shuffle(newUser));
          } else {
            setPointer(pointer + 2);
          }
        }}
      />

      <PlayerCard
        player={users[pointer + 1]}
        color="blue"
        onPress={() => {
          users[pointer].didWin = false;
          if (users.length == 2) {
            console.log("The winner is", users[pointer + 1].name);
            props.navigation.navigate("Award");
          } else if (users.length <= pointer + 3) {
            setPointer(0);
            const newUser = users.filter(user => user.didWin);

            setUsers(shuffle(newUser));
          } else {
            setPointer(pointer + 2);
          }
        }}
      />
    </View>
  );
};
