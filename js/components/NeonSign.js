import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";

const style = StyleSheet.create({
  logo: {
    fontFamily: "Damion",
    fontSize: 70,
    color: "#fee",
    shadowColor: "#ff4444",
    shadowOpacity: 0.8,
    shadowRadius: 2,
    shadowOffset: {
      height: 0,
      width: 0
    }
  },
  logo2: {
    shadowColor: "#ff4444",
    shadowOpacity: 0.8,
    shadowRadius: 0.1,
    shadowOffset: {
      height: 0,
      width: 0
    }
  },
  logo3: {
    shadowColor: "#000",
    shadowOpacity: 0.8,
    shadowRadius: 3,
    shadowOffset: {
      height: 0,
      width: 10
    }
  }
});
export default ({ name, onPress }) => {
  return (
    <TouchableOpacity style={{ padding: 20 }} onPress={onPress}>
      <View style={style.logo3}>
        <View style={style.logo2}>
          <Text style={style.logo}>{name}</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};
