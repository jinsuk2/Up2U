import { StyleSheet } from 'react-native';
export default (styles = StyleSheet.create({
	container: {
		flex: 0,
		justifyContent: 'center',
		alignItems: 'center',
	},
	cardContainer: {
		paddingTop: 120,
		alignSelf: 'center',
		flexDirection: 'row',
	},
	cards: {
		height: 350,
		width: 350,
		flexWrap: 'wrap',
		alignSelf: 'center',
		alignItems: 'center',
	},
}));
