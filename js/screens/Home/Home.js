import React, { useEffect } from 'react';
import { View, Text, Button } from 'native-base';
import styles from './styles';
import Orientation from 'react-native-orientation';
import RNFS from 'react-native-fs';

export default ({ nav }) => {
	useEffect(() => {
		Orientation.lockToPortrait();
	}, []);
	return (
		<View style={styles.container}>
			<Text>This is the home page.</Text>
			<Button rounded={true} onPress={() => nav.navigate('Name')}>
				<Text>Start?</Text>
			</Button>
		</View>
	);
};
