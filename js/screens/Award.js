import React, { useEffect, useState } from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import { Input } from 'react-native-elements';
import Orientation from 'react-native-orientation';

export default ({ navigation }) => {
	const winner = navigation.getParam('winner');
	const players = navigation.getParam('players');
	const [msg, setMsg] = useState('');
	useEffect(() => {
		Orientation.lockToPortrait();
	}, []);
	const winnerMap = {};
	winner.forEach(user => {
		if (winnerMap[user.name]) {
			winnerMap[user.name]++;
		} else {
			winnerMap[user.name] = 1;
		}
	});
	const firstWinner = Object.keys(winnerMap).reduce((a, b) => (winnerMap[a] > winnerMap[b] ? a : b));

	// const finalPhoto = Object.keys(winner).find(firstWinner, winner).photo;
	const finalWinner = winner.find(temp => {
		return temp.name == firstWinner;
	});
	console.log(finalWinner);
	console.log(typeof finalWinner);
	// winner.filter(obj => obj.name == firstWinner);
	return (
		<View
			style={{
				padding: 20,
				justifyContent: 'center',
				alignItems: 'center',
			}}
		>
			<Image style={{ width: 100, height: 50 }} source={require('../../assets/crown.png')} />
			<Text>Final Winner is {firstWinner}</Text>
			<Input
				onChangeText={text => setMsg({ text })}
				value={msg}
				placeholder="Write something to the winner! Congrat him? Make a Request! Leave a comment, be creative!"
			/>
			<Image style={{ height: 100, width: 80 }} borderRadius={100} source={{ uri: finalWinner.photo }} />
			<TouchableOpacity
				disabled={msg ? false : true}
				onPress={() => {
					console.log(msg);
					navigation.navigate('Reveal', {
						msg: msg.text,
						winner: finalWinner,
						players: players,
					});
				}}
			>
				<Text>Click to send</Text>
			</TouchableOpacity>
		</View>
	);
};
