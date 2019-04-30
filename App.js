import React, { setGlobal } from "reactn";

import RootStackNavigator from "./js/navigation/RootStackNavigator";

// Set an initial global state directly:
setGlobal({
  winnerList: []
});

export default (App = () => {
  return <RootStackNavigator />;
});
