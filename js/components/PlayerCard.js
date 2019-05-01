import React, { Component } from "react";
import { TouchableOpacity, Image, Text, Vibration } from "react-native";
import * as Animatable from "react-native-animatable";
export default class PlayerCard extends Component {
  handleViewRef = ref => (this.view = ref);
  bounce = () =>
    this.view
      .bounce(800)
      .then(endState =>
        console.log(endState.finished ? "bounce finished" : "bounce cancelled")
      );
  render() {
    const { player, color, onPress } = this.props;
    return (
      <TouchableOpacity
        key={player.name}
        onPress={() => {
          this.view.tada(600).then(() => {
            onPress();
          });

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
        <Animatable.View
          key={player.name}
          animation="bounceInDown"
          ref={this.handleViewRef}
        >
          <Image
            style={{ width: 300, height: 300 }}
            borderRadius={10}
            source={player.photo}
          />
          <Text>{player.name}</Text>
        </Animatable.View>
      </TouchableOpacity>
    );
  }
}
