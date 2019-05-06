import React, { Component } from "react";
import { TouchableOpacity, Image, Text, Vibration } from "react-native";
import * as Animatable from "react-native-animatable";
import { Container, Header, Content, Card, CardItem, Body } from "native-base";
import Icon from "react-native-vector-icons/FontAwesome5";
import NeonSign from "./NeonSign";
export default class PlayerCard extends Component {
  constructor(props) {
    super(props);
  }
  movement = () => {
    setTimeout(() => {
      this.props.pressed(false);
    }, 1000);
  };
  handleViewRef = ref => (this.view = ref);
  componentWillUnmount() {
    clearTimeout(this.movement);
  }
  render() {
    let { player, onPress } = this.props;
    player = player || { name: "loading", photo: "null" };
    return (
      <TouchableOpacity
        key={player.name}
        onPress={() => {
          this.props.pressed(true);
          this.view.tada(600).then(() => {
            onPress();
          });
          this.movement();

          Vibration.vibrate();
        }}
        style={{
          height: "100%",
          width: "50%",
          backgroundColor: "#00000000",
          justifyContent: "center",
          alignItems: "center"
        }}
      >
        <Animatable.View
          key={player.name}
          animation="bounceInDown"
          ref={this.handleViewRef}
          style={{ alignItems: "center" }}
        >
          <Image
            style={{ width: 250, height: 250 }}
            borderRadius={10}
            source={{ uri: player.photo }}
          />

          <NeonSign size={30} name={player.name} />
        </Animatable.View>
      </TouchableOpacity>
    );
  }
}
