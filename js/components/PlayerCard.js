import React, { Component } from "react";
import { TouchableOpacity, Image, Text, Vibration } from "react-native";
import * as Animatable from "react-native-animatable";
export default class PlayerCard extends Component {
  constructor(props) {
    super(props);
  }

  handleViewRef = ref => (this.view = ref);

  render() {
    let { player, onPress } = this.props;
    player = player || { name: "loading", photo: "null" };
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
            source={
              { uri: player.photo }
            }
          />
          <Text>{player.name}</Text>
        </Animatable.View>
      </TouchableOpacity>
    );
  }
}
