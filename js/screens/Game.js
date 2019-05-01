import React, { useState, useEffect } from "react";
import { View, Vibration, TouchableOpacity } from "react-native";
import CountDown from "react-native-countdown-component";
import Orientation from "react-native-orientation";
import PlayerCard from "../components/PlayerCard";
import { shuffle } from "../helpers";
import { testUsers } from "../fakeData";
import { sanFranciscoWeights } from "react-native-typography";

export default props => {
  const players = props.navigation.getParam("players");
  const originalUser = JSON.parse(JSON.stringify(players));
  const [users, setUsers] = useState(players);
  const [pointer, setPointer] = useState(0);
  const [key, setKey] = useState(0);
  const [userKey, setUserKey] = useState(0);
  const [newGame, setNewGame] = useState(true);
  useEffect(() => {
    Orientation.lockToLandscape();
    if (newGame) {
      setUsers(originalUser);
      setNewGame(false);
    }
  }, [users]);
  const handleOnPressLeft = () => {
    setKey(key + 1);
    users[pointer + 1].didWin = false;
    if (users.length == 2) {
      let winner = users[pointer];
      setNewGame(true);
      props.navigation.navigate("Result", { winner });
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
      let winner = users[pointer + 1];
      props.navigation.navigate("Result", {
        winner
      });
    } else if (users.length <= pointer + 3) {
      setPointer(0);
      const newUser = users.filter(user => user.didWin);
      setUsers(shuffle(newUser));
    } else {
      setPointer(pointer + 2);
    }
  };
  console.log(users);
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
        until={5}
        size={30}
        onFinish={() => {
          Vibration.vibrate();
          setUsers(shuffle(users));
          setPointer(0);
          setUserKey(userKey + 1);
          setKey(key + 1);
        }}
        digitStyle={{ backgroundColor: "#FFF" }}
        digitTxtStyle={{ color: "black", ...sanFranciscoWeights.thin }}
        timeToShow={["S"]}
        timeLabels={{ s: "" }}
      />
      <PlayerCard
        key={"player" + userKey}
        player={users[pointer]}
        onPress={() => {
          handleOnPressLeft();
        }}
      />
      <PlayerCard
        key={"player" + userKey + 1}
        player={users[pointer + 1]}
        onPress={() => {
          handleOnPressRight();
        }}
      />
    </View>
  );
};
