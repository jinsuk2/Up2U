import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import Icon from "react-native-vector-icons/FontAwesome5";
const style = StyleSheet.create({
  logo: {
    fontFamily: "Damion",
    fontSize: 70,
    color: "#ffe",
    shadowColor: "#f4ff44",
    shadowOpacity: 0.8,
    shadowRadius: 7,
    shadowOffset: {
      height: 0,
      width: 0
    }
  },
  logo2: {
    shadowColor: "#f4ff44",
    shadowOpacity: 0.8,
    shadowRadius: 0.1,
    shadowOffset: {
      height: 0,
      width: 0
    }
  },
  logo5: {
    shadowColor: "#f4ff44",

    shadowOpacity: 0.8,
    shadowRadius: 0.5,
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

export default ({ name, children, size = 70, color }) => {
  return (
    <View style={style.logo3}>
      <View style={style.logo2}>
        <View style={style.logo5}>
          <Icon style={{ ...style.logo, fontSize: size, color }} name={name} />
          {children}
        </View>
      </View>
    </View>
  );
};
