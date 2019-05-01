import React, { setGlobal } from "reactn";

import RootStackNavigator from "./js/navigation/RootStackNavigator";

// Set an initial global state directly:
setGlobal({
  winnerList: [],
  players: []
});

export default (App = () => {
  return <RootStackNavigator />;
});
