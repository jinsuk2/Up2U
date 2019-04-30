import React, { useState } from 'react';
import {
    Input,
} from 'react-native-elements';
import {
    View,
    Text,
} from 'react-native';
import {
    Button,
} from 'native-base';

export default Name = ({nav, players}) => {

    const [playerList, setPlayerList] = useState(['']);
    // const [currentPlayer, setCurrent] = useState([]);

    // const addPlayers = (text) => {
    //     setPlayerList(
    //         playerList.push(currentPlater[text])
    //     )
    // }

    const namePlayers = (text, i) => {
        setPlayerList(
            playerList[i] = text
        )
    }
    
    let list = [];

    for (let i = 0; i < players; i++) {
        let index = i;
        list.push(
            <Input
                placeholder="Nickname"
                onChangeText={(text) => namePlayers(text, index)}
            />
        )
    }

    return (
        <View>
            {list}
            <Text>
                This is the name page. There are {players} number of players
            </Text>
            <Button 
                onPress={()=>{
                    nav.navigate("Camera", {playerList})
                }}
                rounded={true}>
            </Button>
            <Button
                rounded
                onPress={()=>{
                    console.log(playerList[0]);
                    console.log(playerList[1]);
                }}>
                <Text>Try</Text>
            </Button>
            <Button
                rounded
                onPress={()=>{
                    
                }}
                >
                <Text>Submit</Text>
                </Button>
        </View>
    )
};