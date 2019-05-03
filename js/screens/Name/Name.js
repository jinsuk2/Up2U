import React, { useState, useEffect } from "react";
import { Input } from "react-native-elements";
import { View } from "react-native";
import {
  Button,
  Card,
  CardItem,
  Body,
  Text,
  Content,
  Container
} from "native-base";
import Orientation from "react-native-orientation";

export default (Name = ({ nav }) => {
  const [playerList, setPlayerList] = useState([]);
  const [currentPlayer, setCurr] = useState("");

  // useEffect(() => {
  //   Orientation.lockToPortrait();
  // }, []);

  //This method should push each text into the position
  const addPlayer = () => {
    if (playerList.length >= 8) {
      alert("You have reached the maximum number of players!");
    } else if (currentPlayer == "") {
      alert("You need to enter a nickkity name!");
    } else if (currentPlayer.length <= 3) {
      alert("4 or more letters plz");
    } else {
      setPlayerList(playerList.concat(currentPlayer));
      setCurr("");
    }
  };

  const addAlert = () => {};

  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      {playerList &&
        playerList.map(data => {
          return (
            <Card>
              <CardItem>
                <Text>{data}</Text>
              </CardItem>
            </Card>
          );
        })}
      <Input
        value={currentPlayer}
        placeholder="Enter A Nickname..."
        maxLength={20}
        onChangeText={text => {
          setCurr(text);
        }}
      />

      {/*For Debug*/}
      {/* <Button
				rounded
				onPress={() => {
					console.log(playerList);
					console.log(currentPlayer);
				}}
			>
				<Text>Test Button</Text>
            </Button> */}

      <Button
        rounded
        onPress={() => {
          addPlayer();
        }}
      >
        <Text>Submit</Text>
      </Button>
      <Button
        rounded
        onPress={() => {
          nav.navigate("Camera", { playerList: playerList });
        }}
      >
        <Text>Camera</Text>
      </Button>
      {playerList.length >= 8 ? (
        <Text>Note: You have reached the max. # of players</Text>
      ) : null}
    </View>
  );
});
