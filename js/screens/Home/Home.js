import React, { Component, useState } from 'react';
import {
    View,
    Text,
    Button
} from 'native-base';
import styles from './styles';

export default ({nav}) => {
    return (
        <View>
            <Text>This is the home page.</Text>
            <Button 
                rounded={true}
                onPress={() => 
                    nav.navigate("Name")
                }>
                <Text>Start?</Text>
            </Button>
        </View>
    )
}