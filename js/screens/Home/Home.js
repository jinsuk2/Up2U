import React, { useEffect } from "react";
import { View, Text, Button } from "native-base";
import styles from "./styles";
import Orientation from "react-native-orientation";
import RNFS from 'react-native-fs'

export default ({ nav }) => {
  useEffect(() => {
    Orientation.lockToPortrait();
  }, []);
  return (
    <View>
      <Text>This is the home page.</Text>
      <Button rounded={true} onPress={() => nav.navigate("Name")}>
        <Text>Start?</Text>
      </Button>
      <Button rounded={true} onPress={() => 
        RNFS.exists("file:///data/user/0/com.up2u/cache/Camera/5242c105-f53b-45b2-adc6-1ad50622bee9.jpg").then(result => {console.log(result)})}>
        <Text>Reset?</Text>
      </Button>
    </View>
  );
};
