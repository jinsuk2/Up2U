import React, { useState, useEffect, getGlobal, useGlobal } from "reactn";
import { View, Vibration, TouchableOpacity, Text } from "react-native";
import CountDown from "react-native-countdown-component";
import Orientation from "react-native-orientation";
import PlayerCard from "../components/PlayerCard";
import { shuffle } from "../helpers";
import { testUsers } from "../fakeData";
import { sanFranciscoWeights } from "react-native-typography";
export default props => {
  const players = props.navigation.getParam("players");
  // const [player, setPlayer] = useGlobal("players");
  const originalUser = JSON.parse(JSON.stringify(players));
  const [users, setUsers] = useState(players);
  const [pointer, setPointer] = useState(0);
  const [key, setKey] = useState(0);
  const [userKey, setUserKey] = useState(0);
  const [newGame, setNewGame] = useState(true);
  const [loading, setLoading] = useState(false);
  const [pressed, setPressed] = useState(false);
  useEffect(() => {
    Orientation.lockToLandscape();
    if (newGame) {
      // setPlayer(players);
      setUsers(originalUser);
      setNewGame(false);
    }
  }, [users, loading]);
  const handleOnPressLeft = () => {
    setKey(key + 1);
    users[pointer + 1].didWin = false;
    if (users.length == 2) {
      let winner = users[pointer];
      setNewGame(true);
      props.navigation.navigate("Result", { winner: winner, originalUser: originalUser });
    } else if (users.length <= pointer + 3) {
      setLoading(true);
      setPointer(0);
      const newUser = users.filter(user => user.didWin);
      setUsers(shuffle(newUser));
      setTimeout(() => {
        setLoading(false);
      }, 2000);
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
        winner: winner, originalUser: originalUser
      });
    } else if (users.length <= pointer + 3) {
      setLoading(true);
      setPointer(0);
      const newUser = users.filter(user => user.didWin);
      setUsers(shuffle(newUser));
      setTimeout(() => {
        setLoading(false);
      }, 2000);
    } else {
      setPointer(pointer + 2);
    }
  };

  console.log(players);
  if (loading) {
    return (
      <View
        style={{
          height: "100%",
          justifyContent: "center",
          alignItems: "center"
        }}
      >
        <Text>Preparing for the next round...</Text>
      </View>
    );
  }
  return (
    <View
      pointerEvents={pressed ? "none" : "auto"}
      style={{ flexDirection: "row", height: "100%" }}
    >
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
        pressed={setPressed}
        key={"player" + userKey}
        player={users[pointer]}
        onPress={() => {
          handleOnPressLeft();
        }}
      />
      <PlayerCard
        pressed={setPressed}
        key={"player" + userKey + 1}
        player={users[pointer + 1]}
        onPress={() => {
          handleOnPressRight();
        }}
      />
    </View>
  );
};
