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
import StartScreen from "../screens/Game";
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
    Start: StartScreen
    // Game: GameScreen,
    // Winner: WinnerScreen,
    // Message: MessageScreen
  },
  {
    headerMode: "none",
    initialRouteName: "Start"
  }
);
const ResultStack = createStackNavigator(
  {
    Result: ResultScreen,
    Award: AwardScreen,
    Reveal: RevealScreen
    // Game: GameScreen,
    // Winner: WinnerScreen,
    // Message: MessageScreen
  },
  {
    headerMode: "none",
    initialRouteName: "Result"
  }
);

const AppStack = createStackNavigator(
  {
    Init: InitStack,
    Play: PlayStack
  },
  {
    headerMode: "none",
    initialRouteName: "Play"
  }
);

export default createAppContainer(
  createSwitchNavigator(
    {
      // TODO:
      // OnboardLoading: OnboardLoading,
      App: AppStack,
      ResultSwtich: ResultStack
      // TODO:
      // Onboard: OnboardScreen
    },
    {
      initialRouteName: "App"
    }
  )
);
