import React, { useState, useEffect } from "react";
import { View } from "react-native";
import CountDown from "react-native-countdown-component";
import Orientation from "react-native-orientation";
import PlayerCard from "../components/PlayerCard";
import { shuffle } from "../helpers";
import { testUsers } from "../fakeData";
export default props => {
  useEffect(() => {
    Orientation.lockToLandscape();
  });
  const handleOnPressLeft = () => {
    setKey(key + 1);
    users[pointer + 1].didWin = false;
    if (users.length == 2) {
      props.navigation.navigate("Award", { winner: users[pointer] });
      setUsers(testUsers);
    } else if (users.length <= pointer + 3) {
      setPointer(0);
      const newUser = users.filter(user => user.didWin);
      setUsers(shuffle(newUser));
    } else {
      setPointer(pointer + 2);
    }
  };
  const handleOnPressRight = () => {
    setKey(key + 1);
    users[pointer].didWin = false;
    if (users.length == 2) {
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
  };
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
        timeLabels={{ s: "" }}
      />
      <PlayerCard
        key={users[pointer].name + pointer}
        player={users[pointer]}
        color="red"
        onPress={handleOnPressLeft}
      />

      <PlayerCard
        key={users[pointer + 1].name + pointer}
        player={users[pointer + 1]}
        color="blue"
        onPress={handleOnPressRight}
      />
    </View>
  );
};
