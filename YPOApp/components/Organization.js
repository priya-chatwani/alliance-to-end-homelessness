import React from 'react';
import { ListItem, Divider } from 'react-native-elements';
import {
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';

import Colors from '../constants/Colors.js'

export default function Attendee(Props){
	return (
		<View>
			<View style={styles.item}>
				<Text style={styles.organization}> 
					{Props.attendee.Organization}
				</Text>
				<Text style={styles.contact}>
					{Props.attendee.Contact}
				</Text>
			</View>
			<Divider style={styles.divider} />
		</View>
	);
}

const styles = StyleSheet.create({
	item: {
		backgroundColor: '#44779F',
		height: 71,
		display: 'flex',
		flexDirection: 'row',
		alignItems: 'center',
	}, 
	organization: {
		flexWrap: 'wrap',
		flex: 2,
		color: '#fff',
		marginLeft: 10,
		marginRight: 15,
	}, 
	contact: {
		color: '#fff',
		marginRight: 10,
		flexWrap: 'wrap',
		flex: 3,
	}, 
	divider: {
		paddingLeft: 5,
		paddingRight: 5,
		backgroundColor: '#888888',
	}
});