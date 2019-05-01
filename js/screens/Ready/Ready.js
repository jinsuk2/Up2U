import React, { useEffect }from 'react';
import {
    View,
    Text,
    Image,
} from 'react-native';
import {
    Card, CardItem
} from 'native-base'
import { Button } from 'native-base';
import Orientation from "react-native-orientation";
import { NavigationActions } from 'react-navigation';

export default ({nav, players}) => {
    useEffect(() => {
        Orientation.lockToPortrait();
      }, []);
    const originalUser = JSON.stringify(players);
    
    return (
        <View>
            <Text>This is the Ready page.</Text>
            {players && players.map(player => {
                let name = player.name;
                let pic = player.photo;
                return (
                    <Card>
                        <CardItem>
                            <Text>
                                {name}
                            </Text>
                            <Image style={{width: '100%', height: '100%'}} source={{uri: pic}}/>
                        </CardItem>
                    </Card>
                )
            })}
            <Button rounded
                    onPress={() => {
                        nav.navigate('Play', {players: players})
                    }}>
                <Text>to start screen</Text>
            </Button>
            <Button onPress={() => {
                console.log(originalUser)
                console.log(players);
            }}><Text>Debug Button</Text></Button>
        </View>
    )
};