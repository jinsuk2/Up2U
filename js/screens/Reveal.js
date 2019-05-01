import React, { Component, useState, useEffect, setGlobal } from "reactn";
import Swiper from "react-native-deck-swiper";
import { StyleSheet, Text, View, Image } from "react-native";
import { Button } from "native-base";
import Orientation from "react-native-orientation";
import RNFS from "react-native-fs";

export default (Reveal = ({ navigation }) => {
  const message = navigation.getParam("msg");
  const winner = navigation.getParam("winner");
  const players = navigation.getParam("players");
  const [cards, setCards] = useState([
    "Hand it back to the owner!",
    ...message.trim().split(" ")
  ]);
  const [swipedAll, setSwipedAll] = useState(false);

  const renderCard = (card, index) => {
    return (
      <View style={styles.card}>
        <Text style={styles.text}>{card}</Text>
      </View>
    );
  };

  const onSwiped = type => {
    console.log(`on swiped ${type}`);
  };

  async function resetGame() {
    players.map(player => {
      let uri = player.photo;
      RNFS.exists(uri).then(result => {
        if (result) {
          RNFS.unlink(uri)
            .then((success, path) => {
              console.log("FILE DELETED", success, path);
            })
            .catch(err => {
              console.log(err.message);
            });
        }
      });
    });
  };

  return (
    <View style={styles.container}>
      <Text>Final Winner is {winner.name}</Text>
      <Image
        style={{ width: 80, height: 100 }}
        borderRadius={100}
        source={{ uri: winner.photo }}
      />

      <Button
        rounded
        onPress={() => {
          resetGame();
          setGlobal({ winnerList: [] });
          navigation.navigate("Init");
        }}
      >
        <Text>New Game?</Text>
      </Button>

      {swipedAll || (
        <Swiper
          ref={swiper => {
            this.swiper = swiper;
          }}
          onSwiped={() => onSwiped("general")}
          backgroundColor="black"
          onSwipedLeft={() => onSwiped("left")}
          onSwipedRight={() => onSwiped("right")}
          onSwipedTop={() => onSwiped("top")}
          onSwipedBottom={() => onSwiped("bottom")}
          onSwipedAll={() => setSwipedAll(true)}
          cards={cards}
          cardVerticalMargin={80}
          renderCard={renderCard}
          stackSize={3}
          stackSeparation={15}
          animateOverlayLabelsOpacity
          animateCardOpacity
        />
      )}
    </View>
  );
});

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "black",
    justifyContent: "center",
    alignItems: "center"
  },
  card: {
    height: 500,
    borderRadius: 4,
    borderWidth: 2,
    borderColor: "#E8E8E8",
    justifyContent: "center",
    backgroundColor: "white"
  },
  text: {
    textAlign: "center",
    fontSize: 50,
    backgroundColor: "transparent"
  },
  done: {
    textAlign: "center",
    fontSize: 30,
    color: "white",
    backgroundColor: "transparent"
  }
});
