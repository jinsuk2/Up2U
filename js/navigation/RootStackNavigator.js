import React from "react";
import {
  createStackNavigator,
  createAppContainer,
  createSwitchNavigator
} from "react-navigation";
import HomeScreen from "../screens/Home";
import NameScreen from "../screens/Name";
import CameraScreen from "../screens/Camera";
import ReadyScreen from "../screens/Ready";
import GameScreen from "../screens/Game";
import ResultScreen from "../screens/Result";
import AwardScreen from "../screens/Award";
import RevealScreen from "../screens/Reveal";
const InitStack = createStackNavigator(
  {
    Home: HomeScreen,
    Name: NameScreen,
    Camera: CameraScreen,
    Ready: ReadyScreen
  },
  {
    headerMode: "none",
    initialRouteName: "Home"
  }
);

const PlayStack = createStackNavigator(
  {
    Game: GameScreen
  },
  {
    headerMode: "none",
    initialRouteName: "Game"
  }
);
const ResultStack = createStackNavigator(
  {
    Result: ResultScreen,
    Award: AwardScreen,
    Reveal: RevealScreen
  },
  {
    headerMode: "none",
    initialRouteName: "Result"
  }
);

export default createAppContainer(
  createSwitchNavigator(
    {
      // TODO:
      // OnboardLoading: OnboardLoading,
      // Test: ReadyScreen,
      Init: InitStack,
      Play: PlayStack,
      ResultSwitch: ResultStack
      // TODO:
      // Onboard: OnboardScreen
    },
    {
      transitionConfig: () => ({
        transitionSpec: {
          duration: 0 // Set the animation duration time as 0 !!
        }
      }),
      initialRouteName: "Init"
    }
  )
);
