import React, {
  useGlobal,
  useEffect,
  useState,
  setGlobal,
  getGlobal
} from "reactn";
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  ImageBackground
} from "react-native";
import Orientation from "react-native-orientation";
import Icon from "react-native-vector-icons/FontAwesome5";
import NeonSign from "../components/NeonSign";
import NeonIcon from "../components/NeonIcon";
export default ({ navigation }) => {
  useEffect(() => {
    Orientation.lockToLandscape();
  }, []);
  const winner = navigation.getParam("winner");
  const players = navigation.getParam("originalUser");
  const [winnerList, setWinnerList] = useGlobal("winnerList");

  return (
    <ImageBackground
      source={require("../../assets/wallbg.jpg")}
      style={{ width: "100%", height: "100%" }}
    >
      <View
        style={{
          flex: 1,
          justifyContent: "center",
          alignItems: "center"
        }}
      >
        <NeonIcon color={"#ffe"} name={"crown"} />
        <View style={{ flexDirection: "row" }}>
          <View
            className="left"
            style={{
              width: "50%",
              flex: 1,
              justifyContent: "center",
              alignItems: "center"
            }}
          >
            <Image
              borderRadius={5}
              style={{
                width: 250,
                height: 250,
                shadowColor: "#000",
                shadowOpacity: 0.8,
                shadowRadius: 5,
                shadowOffset: {
                  height: 0,
                  width: 10
                }
              }}
              source={{ uri: winner.photo }}
            />
          </View>
          <View className="right" style={{ width: "50%" }}>
            <NeonSign
              onPress={() => {}}
              size={30}
              name={`you've picked ${winner.name}`}
            />

            <NeonSign
              onPress={() => {
                setGlobal({ winnerList: [...winnerList, winner] });
                navigation.navigate("Game", { players: players });
              }}
              size={30}
              name={"One More?"}
            />
            <NeonSign
              size={30}
              onPress={() => {
                setGlobal({ winnerList: [...winnerList, winner] });
                navigation.navigate("Award", {
                  winner: getGlobal().winnerList,
                  players: players
                });
              }}
              name={"Done"}
            />
          </View>
        </View>
      </View>
    </ImageBackground>
  );
};
