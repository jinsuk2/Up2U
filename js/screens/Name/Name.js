import React, { useState, useEffect } from "react";
import { Input } from "react-native-elements";
import { View, ImageBackground } from "react-native";
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
import styles from "./styles";
import NeonSign from "../../components/NeonSign";

export default (Name = ({ nav }) => {
  const [playerList, setPlayerList] = useState([]);
  const [currentPlayer, setCurr] = useState("");

  useEffect(() => {
    Orientation.lockToPortrait();
  }, []);

  //This method should push each text into the position
  const addPlayer = () => {
    if (playerList.length >= 8) {
      alert("You have reached the maximum number of players!");
    } else if (currentPlayer == "") {
      alert("You need to enter a nickkity name!");
    } else if (currentPlayer.length <= 2) {
      alert("3 or more letters plz");
    } else {
      setPlayerList(playerList.concat(currentPlayer));
      setCurr("");
    }
  };

  const toggleInput = () => {
    if (playerList.length >= 8) {
      return <Text>Note: You have reached the max. # of players</Text>;
    } else
      return (
        <Input
          value={currentPlayer}
          placeholder="Enter A Nickname..."
          maxLength={20}
          onChangeText={text => {
            setCurr(text);
          }}
        />
      );
  };

  const checkMin = () => {
    if (playerList.length <= 1) {
      alert("You need to enter 2 or more players!");
    } else {
      nav.navigate("Camera", { playerList: playerList });
    }
  };

  return (
    <ImageBackground
      source={require("../../../assets/wallbg.jpg")}
      style={{ width: "100%", height: "100%" }}
    >
      <View style={styles.container}>
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
        {toggleInput()}

        <NeonSign
          name="Submit"
          size={25}
          onPress={() => {
            addPlayer();
          }}
        />
        <NeonSign
          name="Finished"
          onPress={() => {
            checkMin();
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
      </View>
    </ImageBackground>
  );
});
