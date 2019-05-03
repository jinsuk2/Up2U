import React, { Component } from "react";
import { TouchableOpacity, Image, Text, Vibration } from "react-native";
import * as Animatable from "react-native-animatable";
import { Container, Header, Content, Card, CardItem, Body } from "native-base";
import Icon from "react-native-vector-icons/FontAwesome5";
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
          this.props.pressed(true);
          this.view.tada(600).then(() => {
            onPress();
          });

          Vibration.vibrate();
          setTimeout(() => {
            this.props.pressed(false);
          }, 1000);
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
            style={{ width: 250, height: 250 }}
            borderRadius={10}
            source={{ uri: player.photo }}
          />
          <Card>
            <CardItem>
              <Body style={{ alignItems: "center" }}>
                <Text>{player.name}</Text>
              </Body>
            </CardItem>
          </Card>
        </Animatable.View>
      </TouchableOpacity>
    );
  }
}
