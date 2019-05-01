import React, { useState }from 'react';
import {
    View,
    Text,
    Image,
} from 'react-native';
import {
    Card, CardItem
} from 'native-base'
import { Button } from 'native-base';
import { NavigationActions } from 'react-navigation';

export default ({nav, players}) => {

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
                            <Image style={{width: '100%', height: '100%'}} source={{uri: pic.uri}}/>
                        </CardItem>
                    </Card>
                )
            })}
            <Button rounded
                    onPress={() => {
                        // addPlayer(photos, playerList);
                        nav.navigate("Play", {}, NavigationActions.navigate({ routeName: "Game"}))
                    }}>
                <Text>to start screen</Text>
            </Button>
        </View>
    )
};