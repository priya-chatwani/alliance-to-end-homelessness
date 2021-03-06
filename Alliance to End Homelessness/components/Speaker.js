import React from 'react';
import { Divider } from 'react-native-elements';
import {
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import Colors from '../constants/Colors.js';

export default function Speaker(Props) {
	const onPress = () => {
		Props.onSpeakerSelect(Props.speaker);
	}

	return (
		<TouchableOpacity onPress={onPress} activeTint={.80} style={styles.container}>
			<View style={styles.item}>
				<Text style={styles.speaker}>
					{Props.speaker.Name}
				</Text>
			</View>
			<Divider style={{backgroundColor: '#888888'}} />
		</TouchableOpacity>
	);
}

const styles = StyleSheet.create({
	container: {
		backgroundColor: '#fff',
		paddingHorizontal: 10,
	},
	item: {
    	paddingVertical: 20,
		display: 'flex',
		flexDirection: 'row',
		justifyContent: 'center',
	},
	speaker: {
    	fontSize: 16,
		flexWrap: 'wrap',
		flex: 5,
		color: '#000000',
	},
});
