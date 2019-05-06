import React, { Component } from "react";
import * as Animatable from "react-native-animatable";
import Icon from "react-native-vector-icons/FontAwesome5";
import NeonSign from "../components/NeonSign";
export default class StopWatch extends Component {
  constructor(props) {
    super(props);
  }
  handleViewRef = ref => (this.view = ref);

  componentDidMount() {
    this.interval = setInterval(() => {
      this.view.shake(300);
    }, 1000);
  }
  componentWillUnmount() {
    clearInterval(this.interval);
  }

  render() {
    return (
      <Animatable.View ref={this.handleViewRef}>
        <NeonSign onPress={() => {}}>
          <Icon name="stopwatch" size={30} color="white" />
        </NeonSign>
      </Animatable.View>
    );
  }
}
