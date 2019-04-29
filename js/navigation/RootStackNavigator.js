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
import StartScreen from "../screens/Start";
import GameScreen from "../screens/Game";
import AwardScreen from "../screens/Award";

const InitStack = createStackNavigator(
  {
    Home: HomeScreen,
    Name: NameScreen,
    Camera: CameraScreen,
    Ready: ReadyScreen,
    Game: GameScreen,
    Award: AwardScreen
  },
  {
    headerMode: "none",
    initialRouteName: "Game"
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

const AppStack = createStackNavigator(
  {
    Init: InitStack
    // Play: PlayStack
  },
  {
    headerMode: "none",
    initialRouteName: "Init"
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
