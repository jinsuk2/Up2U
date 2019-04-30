import React from "react";
import { TouchableOpacity, Image, Text, Vibration } from "react-native";
import * as Animatable from "react-native-animatable";
export default (PlayerCard = ({ player, color, onPress }) => {
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
});
