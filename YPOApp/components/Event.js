import React from 'react';
import { ListItem } from 'react-native-elements';
import {
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';

export default function Event(Props){
	return (
		<View style={styles.item}>
			<Text stile={styles.time}> 
				{Props.event.Start + "-" + Props.event.End}
			</Text>
			<Text style={styles.title}>
				{Props.event.Title}
			</Text>
		</View>

	);
}

const styles = StyleSheet.create({
	item: {
		display: 'flex',
		flexDirection: 'row',
		marginBottom: 10,
	}, 
	title: {
		marginLeft: 10,
		flexWrap: 'wrap',
		flex: 1,
	}, 
	time: {
			marginLeft: 10,
			marginRight: 10,
	},
});
