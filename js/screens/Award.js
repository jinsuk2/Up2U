import React from "react";
import { View, Text, Image } from "react-native";
export default () => {
  return (
    <View
      style={{
        height: "100%",
        justifyContent: "center",
        alignItems: "center"
      }}
    >
      <Text>The winner is: </Text>
      <Image
        style={{ width: 100, height: 50 }}
        source={require("../assets/crown.png")}
      />
      <Image borderRadius={150} source={require("../assets/test.jpg")} />
    </View>
  );
};
