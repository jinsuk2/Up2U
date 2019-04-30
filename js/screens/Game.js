import React, { useState, useEffect } from "react";
import { View, Text } from "react-native";
import CountDown from "react-native-countdown-component";
import Orientation from "react-native-orientation";
import PlayerCard from "../components/PlayerCard";
import { shuffle } from "../helpers";
import { testUsers } from "../fakeData";
import Dialog, { DialogContent } from "react-native-popup-dialog";
import { sanFranciscoWeights } from "react-native-typography";
export default props => {
  const originalUser = JSON.parse(JSON.stringify(testUsers));
  const [users, setUsers] = useState(testUsers);
  const [pointer, setPointer] = useState(0);
  const [key, setKey] = useState(0);
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    Orientation.lockToLandscape();
  });
  const handleOnPressLeft = () => {
    setKey(key + 1);
    console.log(users[pointer]);
    users[pointer + 1].didWin = false;
    if (users.length == 2) {
      let winner = users[pointer];
      setUsers(
        originalUser.map(user => {
          return { ...user, didWin: true };
        })
      );
      props.navigation.navigate("Award", { winner });
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
    console.log(users[pointer + 1]);
    users[pointer].didWin = false;
    if (users.length == 2) {
      let winner = users[pointer + 1];
      setUsers(
        originalUser.map(user => {
          return { ...user, didWin: true };
        })
      );
      props.navigation.navigate("Award", {
        winner
      });
      props.navigation.navigate("Award", { winner });
    } else if (users.length <= pointer + 3) {
      setPointer(0);
      const newUser = users.filter(user => user.didWin);
      setUsers(shuffle(newUser));
    } else {
      setPointer(pointer + 2);
    }
  };

  return (
    <View style={{ flexDirection: "row", height: "100%" }}>
      <Dialog
        visible={visible}
        onTouchOutside={() => {
          setVisible(false);
        }}
      >
        <DialogContent>
          <Text>Faster!!</Text>
        </DialogContent>
      </Dialog>
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
          setVisible(true);
        }}
        digitStyle={{ backgroundColor: "#FFF" }}
        digitTxtStyle={{ color: "black", ...sanFranciscoWeights.thin }}
        timeToShow={["S"]}
        timeLabels={{ s: "" }}
      />
      <PlayerCard
        key={"player" + key}
        player={users[pointer]}
        color="red"
        onPress={() => {
          handleOnPressLeft();
        }}
      />

      <PlayerCard
        key={"player" + key + 1}
        player={users[pointer + 1]}
        color="blue"
        onPress={() => {
          handleOnPressRight();
        }}
      />
    </View>
  );
};
