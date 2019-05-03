import React, { Component } from "react";
import { TouchableOpacity, Image, Text, Vibration } from "react-native";
import * as Animatable from "react-native-animatable";
import { Container, Header, Content, Card, CardItem, Body } from "native-base";

import Icon from "react-native-vector-icons/FontAwesome5";
export default class StopWatch extends Component {
  constructor(props) {
    super(props);
  }
  componentDidMount() {
    this.shake();
  }
  componentWillUnmount() {
    clearInterval(this.shake);
  }
  shake = () => {
    setInterval(() => {
      console.log("shaking");
      this.view.shake(300);
    }, 1000);
  };
  handleViewRef = ref => (this.view = ref);

  render() {
    return (
      <Animatable.View ref={this.handleViewRef}>
        <Icon name="stopwatch" size={30} color="black" />
      </Animatable.View>
    );
  }
}
