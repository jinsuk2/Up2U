import React, { Component } from "react";
import { StyleSheet, View } from "react-native";
import Game from "./js/screens/Game";

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
