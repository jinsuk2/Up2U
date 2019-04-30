import React, { Component, useState } from "react";
import Swiper from "react-native-deck-swiper";
import { Button, StyleSheet, Text, View } from "react-native";

export default (Reveal = () => {
  const [cards, setCards] = useState(["have", "fun"]);
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

  const onSwipedAllCards = () => {
    setSwipedAll(true);
  };

  const swipeLeft = () => {
    swiper.swipeLeft();
  };

  return (
    <View style={styles.container}>
      <Swiper
        ref={swiper => {
          this.swiper = swiper;
        }}
        onSwiped={() => onSwiped("general")}
        onSwipedLeft={() => onSwiped("left")}
        onSwipedRight={() => onSwiped("right")}
        onSwipedTop={() => onSwiped("top")}
        onSwipedBottom={() => onSwiped("bottom")}
        onTapCard={swipeLeft}
        cards={cards}
        cardVerticalMargin={80}
        renderCard={renderCard}
        onSwipedAll={onSwipedAllCards}
        stackSize={3}
        stackSeparation={15}
        animateOverlayLabelsOpacity
        animateCardOpacity
        swipeBackCard
      />
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
