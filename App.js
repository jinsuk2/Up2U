import React, { Component } from "react";
import { StyleSheet, View } from "react-native";
import Game from "./screens/Game";

<<<<<<< HEAD
import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View} from 'react-native';
import { TouchableOpacity } from 'native-base';
import RootStackNavigator from './js/navigation/RootStackNavigator';

export default class App extends Component {

  render() {
    return (
      <RootStackNavigator />
    );
  }
}
=======
export default () => {
  return (
    <View>
      <Game />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#F5FCFF"
  },
  welcome: {
    fontSize: 20,
    textAlign: "center",
    margin: 10
  },
  instructions: {
    textAlign: "center",
    color: "#333333",
    marginBottom: 5
  }
});
>>>>>>> 00be1db3fd4d010fdad15cd06f822534993c3b99
