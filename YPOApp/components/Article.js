import React from 'react';
import { ListItem, Divider } from 'react-native-elements';
import {
  Image,
  ScrollView,
  StyleSheet,
  Text,
  Linking,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';

import Colors from '../constants/Colors.js'
import { Ionicons } from '@expo/vector-icons';

export default function Article (Props) {

	return (
		<TouchableOpacity onPress={() => Linking.openURL(Props.article.Link)} activeOpacity={.80} style={styles.container}>
			<View style={styles.item}>
				<Text style={styles.title}>
					{Props.article.Title}
				</Text>
			</View>
			<Divider style={{backgroundColor: '#C4C4C4'}} />
		</TouchableOpacity>
	);
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    paddingHorizontal: 10,
  },
	button: {
		flex: 1,
	},
	item: {
		height: 71,
		display: 'flex',
		flexDirection: 'row',
		alignItems: 'center',
	},
	title: {
    fontSize: 16,
		flexWrap: 'wrap',
		flex: 2,
		color: '#000000',
		marginRight: 10,
	},
	heading: {
		fontWeight: 'bold',
	},
	info: {
		paddingLeft: 40,
		paddingBottom: 10,
		backgroundColor: '#fff',
		color: '#44779F',
		flex: 3,
	},
});
