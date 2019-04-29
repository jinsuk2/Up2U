import React, {Component} from 'react';
import Game from "./js/screens/Game";
import {StyleSheet, View} from 'react-native';
import RootStackNavigator from './js/navigation/RootStackNavigator';

class App extends Component {

  render() {
    return (
      // <View>
      //   <Game />
      // </View>
      <RootStackNavigator />
    );
  }
}

export default App;