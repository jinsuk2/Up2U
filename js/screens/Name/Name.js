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

    const [playerList, setPlayerList] = useState([]);
    const [currentPlayer, setCurr] = useState('');
    
    //This method should push each text into the position
    const addPlayer = () => {
        setPlayerList(playerList.concat(currentPlayer));
        setCurr("");
    }

    return (
        <View>
            {playerList && 
                playerList.map(data => {
                    return(
                        <Text>
                            {data}
                        </Text>
                    )
                })}
            <Input 
                value={currentPlayer}
                placeholder="Enter A Nickname..."
                onChangeText={text => {
                    setCurr(text)
                }}>
            </Input>
            {/* <Button 
                onPress={()=>{
                    nav.navigate("Camera", {playerList})
                }}
                rounded={true}>
            </Button> */}
            <Button
                rounded
                onPress={()=>{
                    console.log(playerList);
                    console.log(currentPlayer);
                }}>
                <Text>Test Button</Text>
            </Button>
            <Button
                rounded
                onPress={()=>{
                    addPlayer()
                }}
                >
                <Text>Submit</Text>
            </Button>
            <Button
                rounded
                onPress={()=>{
                    nav.navigate("Camera", {playerList: playerList});
                }}
                >
                <Text>Camera</Text>
            </Button>
        </View>
    )
};