import { StyleSheet, Text, View } from 'react-native';
import { useFonts } from 'expo-font';

//? user imports
import userDetails from '../src/details/userDetails';

export default function Page() {
	const [fontsLoaded] = useFonts({
		'Bison-Bold': require('../src/fonts/Bison-Bold.ttf'),
	});

	return (
		<View style={styles.container}>
			<Text style={styles.title}>Hi There</Text>
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		alignItems: 'center',
		padding: 24,
	},
	title: {
		fontSize: 64,
		fontWeight: 'bold',
		color: userDetails[0].coloPalette['midnight-green'],
	},
});
