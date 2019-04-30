import React, { Component, useState } from 'react';
import {
    View,
    Text,
    Button
} from 'native-base';
import NumberInput from 'react-native-numeric-input';
import { useNavigation, useNavigationParam } from 'react-navigation-hooks';
import styles from './styles';
import { withNavigation } from 'react-navigation';

export default Home = ({nav}) => {

    const [players, setPlayers] = useState(2);

    return (
        <View>
            <Text>This is the home page.</Text>
            <NumberInput
                value={players}
                type='plus-minus'
                minValue={2}
                maxValue={8}
                initValue={players}
                onChange={() => 
                    setPlayers(players + 1)
                }
                // containerStyle={styles.container}
                rounded={true}
                editable={false}
                rightButtonBackgroundColor={"#64B5F6"}
                leftButtonBackgroundColor={"#F8BBD0"}
            ></NumberInput>
            <Button 
                rounded={true}
                onPress={() => {
                    nav.navigate("Name", {players});
                }}>
                <Text>Start?</Text>
            </Button>
        </View>
    )
}