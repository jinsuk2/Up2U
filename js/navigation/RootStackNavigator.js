import React from "react";
import {
  createStackNavigator,
  createAppContainer,
  createSwitchNavigator
} from "react-navigation";
import HomeScreen from "../screens/Home/Home";
import NameScreen from "../screens/Name/Name";
import CameraScreen from "../screens/Camera/Camera";
import ReadyScreen from "../screens/Ready/Ready";
import StartScreen from "../screens/Game";
import ResultScreen from "../screens/Result";
import AwardScreen from "../screens/Award";
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
    Award: AwardScreen
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
    Play: PlayStack,
    Result: ResultStack
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
      App: AppStack
      // TODO:
      // Onboard: OnboardScreen
    },
    {
      initialRouteName: "App"
    }
  )
);
