import React, { useState }from 'react';
import {
    View,
    Text
} from 'react-native';
import { Image } from 'react-native-elements';
import { Button } from 'native-base';

export default ({nav, photos, playerList}) => {

    const [player, setPlayer] = useState([]);

    const addPlayer = (photos, playerList) => {
        setPlayer([
          ...player,
          {
            id: player.length,
            source: photos[0].data.uri,
            name: playerList[0]
          }
        ]);
      };

    return (
        <View>
            <Text>This is the Ready page.</Text>
            <Image style={{ height: 300, width: 240 }}
                source={{ uri: photos[0].data.uri}}></Image>
            <Text>{playerList[0]}</Text>
            <Button rounded
                    onPress={() => {
                        addPlayer(photos, playerList);
                        nav.navigate("Start", {player: player})
                    }}>
                <Text>to start screen</Text>
            </Button>
        </View>
    )
};