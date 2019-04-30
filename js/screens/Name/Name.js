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

    const sample = [{id: 0},{},{},{}]
    const [playerList, setPlayerList] = useState(sample);
    // const [currentPlayer, setCurrent] = useState([]);

    // const namePlayers = (text, i) => {
    //     setPlayerList(
    //         playerList[i] = text
    //     )
    // }
    
    // let list = [];

    // for (let i = 0; i < players; i++) {
    //     // let index = i;

    return (
        <View>
            {/* {list} */}
            {playerList.map((data, index) => {
                return (
                    <Input
                        index={index}
                        placeholder="Nickname"
                        onChangeText={(text) => setPlayerList(
                            [...playerList, {
                            name: text
                        }])}
                    />
                )
            })}
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