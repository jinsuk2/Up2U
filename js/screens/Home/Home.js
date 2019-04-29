import React from 'react';
import {
    View,
    Text,
    Button
} from 'native-base';
import NumberInput from 'react-native-numeric-input';
import styles from './styles';

const initGame = () => {

}

export default Home => {
    return (
        <View>
            <Text>This is the home page.</Text>
            <NumberInput type='up-down' onChange={value => console.log(value)}></NumberInput>
        </View>
    )
};