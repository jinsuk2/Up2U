import React, { useEffect } from 'react';
import { View, Text, Image, ScrollView } from 'react-native';
import { Card, CardItem } from 'native-base';
import { Button } from 'native-base';
import Orientation from 'react-native-orientation';
import { NavigationActions } from 'react-navigation';
import styles from './styles';
import { testUsers } from '../../fakeData.js';

export default ({ nav, players }) => {
	useEffect(() => {
		Orientation.lockToPortrait();
	}, []);

	// console.log(testUsers);
	return (
		<View style={styles.container}>
			<Text>This is the Ready page.</Text>
			<ScrollView horizontal={true} style={styles.cardContainer} showsHorizontalScrollIndicator={false}>
				{players &&
					players.map(player => {
						let name = player.name;
						let pic = player.photo;
						return (
							<Card>
								<CardItem style={styles.cards}>
									<Image
										style={{ width: 200, height: 200, alignSelf: 'center', flex: 1 }}
										source={{
											uri: pic,
										}}
									/>
									<Text style={{ flex: 1, flexDirection: 'column' }}>{name}</Text>
								</CardItem>
							</Card>
						);
					})}
			</ScrollView>
			<Button
				rounded
				onPress={() => {
					nav.navigate('Game', { players });
				}}
			>
				<Text>to start screen</Text>
			</Button>
		</View>
	);
};
