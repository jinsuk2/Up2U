import React, { useState, useEffect } from "react";
import { View, TouchableOpacity, Vibration, Text, Image } from "react-native";
import CountDown from "react-native-countdown-component";
import Orientation from "react-native-orientation";
import * as Animatable from "react-native-animatable";
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
        backgroundColor: "white",
        justifyContent: "center",
        alignItems: "center"
      }}
    >
      <Animatable.View animation="bounceInDown">
        <Image
          style={{ width: 300, height: 300 }}
          borderRadius={10}
          source={player.photo}
        />
        <Text>{player.name}</Text>
      </Animatable.View>
    </TouchableOpacity>
  );
};
const shuffle = array => {
  return array.sort(() => Math.random() - 0.5);
};
export default props => {
  useEffect(() => {
    Orientation.lockToLandscape();
  });
  const [x, updateState] = useState();

  const testUsers = [
    { name: "1", photo: require("../../assets/download-1.jpg"), didWin: true },
    { name: "2", photo: require("../../assets/download-2.jpg"), didWin: true },
    { name: "3", photo: require("../../assets/download-3.jpg"), didWin: true },
    { name: "4", photo: require("../../assets/download-4.jpg"), didWin: true },
    { name: "5", photo: require("../../assets/download.jpg"), didWin: true },
    { name: "6", photo: require("../../assets/images-1.jpg"), didWin: true },
    { name: "7", photo: require("../../assets/images-2.jpg"), didWin: true },
    { name: "8", photo: require("../../assets/images.jpg"), didWin: true }
  ];
  const [users, setUsers] = useState(testUsers);
  const [pointer, setPointer] = useState(0);
  const [counter, setCounter] = useState(5);
  const [key, setKey] = useState(0);
  return (
    <View style={{ flexDirection: "row", height: "100%" }}>
      <CountDown
        key={key}
        style={{
          position: "absolute",
          left: 0,
          right: 0,
          bottom: "40%",
          zIndex: 1
        }}
        until={counter}
        size={30}
        onFinish={() => {}}
        digitStyle={{ backgroundColor: "#FFF" }}
        digitTxtStyle={{ color: "black" }}
        timeToShow={["S"]}
        timeLabels={{ s: "Versus" }}
      />
      <PlayerCard
        key={users[pointer].name}
        player={users[pointer]}
        color="red"
        onPress={() => {
          setKey(key + 1);
          users[pointer + 1].didWin = false;
          if (users.length == 2) {
            console.log("The winner is", users[pointer].name);
            props.navigation.navigate("Award", { winner: users[pointer] });
            setUsers(testUsers);
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
        key={users[pointer + 1].name}
        player={users[pointer + 1]}
        color="blue"
        onPress={() => {
          setKey(key + 1);
          users[pointer].didWin = false;
          if (users.length == 2) {
            console.log("The winner is", users[pointer + 1].name);
            props.navigation.navigate("Award", {
              winner: users[pointer + 1]
            });
            setUsers(testUsers);
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
