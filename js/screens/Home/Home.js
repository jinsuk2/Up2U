import React, { useEffect } from 'react';
import { View, Text, Button } from 'native-base';
import styles from './styles';
import * as Animatable from 'react-native-animatable';
import Orientation from 'react-native-orientation';
import { StyleSheet, ImageBackground } from 'react-native';
import RNFS from 'react-native-fs';
import { TouchableOpacity } from 'react-native-gesture-handler';
import NeonSign from '../../components/NeonSign';
const style = StyleSheet.create({
	logo: {
		fontFamily: 'Damion',
		fontSize: 80,
		color: '#fee',
		shadowColor: '#ff4444',
		shadowOpacity: 0.8,
		shadowRadius: 2,
		shadowOffset: {
			height: 0,
			width: 0,
		},
	},
	logo2: {
		shadowColor: '#ff4444',
		shadowOpacity: 0.8,
		shadowRadius: 0.1,
		shadowOffset: {
			height: 0,
			width: 0,
		},
	},
	logo3: {
		shadowColor: '#000',
		shadowOpacity: 0.8,
		shadowRadius: 3,
		shadowOffset: {
			height: 0,
			width: 10,
		},
	},
	welcome: {
		fontSize: 20,
		textAlign: 'center',
		margin: 10,
	},
	instructions: {
		textAlign: 'center',
		color: '#333333',
		marginBottom: 5,
	},
	picker: {
		flex: 1,
		alignSelf: 'center',
	},
});

export default ({ nav }) => {
	useEffect(() => {
		Orientation.lockToPortrait();
	}, []);
	return (
		<ImageBackground source={require('../../../assets/wallbg.jpg')} style={{ width: '100%', height: '100%' }}>
			<View style={styles.container}>
				<Animatable.View animation="flash">
					<NeonSign name={'Start'} sonPress={() => nav.navigate('Name')} />
				</Animatable.View>
			</View>
		</ImageBackground>
	);
};
