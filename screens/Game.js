import React, { useState } from "react";
import { View, TouchableOpacity, Vibration, Text } from "react-native";

const PlayerCard = ({ player, color, onPress }) => {
  console.log(player);
  return (
    <TouchableOpacity
      onPress={() => {
        onPress();
        Vibration.vibrate();
      }}
      style={{
        height: "50%",
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
export default () => {
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

  return (
    <View>
      <PlayerCard
        player={users[pointer]}
        color="red"
        onPress={() => {
          console.log(pointer);
          users[pointer + 1].didWin = false;

          if (users.length == 2) {
            console.log("The winner is", users[pointer].name);
          } else if (users.length <= pointer + 3) {
            setPointer(0);
            const newUser = users.filter(user => user.didWin);

            setUsers(shuffle(newUser));
            console.log(newUser);
          } else {
            setPointer(pointer + 2);
          }
        }}
      />
      <PlayerCard
        player={users[pointer + 1]}
        color="blue"
        onPress={() => {
          console.log(pointer);
          users[pointer].didWin = false;
          if (users.length == 2) {
            console.log("The winner is", users[pointer + 1].name);
          } else if (users.length <= pointer + 3) {
            setPointer(0);
            const newUser = users.filter(user => user.didWin);

            setUsers(shuffle(newUser));
            console.log(newUser);
          } else {
            setPointer(pointer + 2);
          }
        }}
      />
    </View>
  );
};
