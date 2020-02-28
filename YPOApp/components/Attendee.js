import React from 'react';
import { ListItem, Divider, Button } from 'react-native-elements';
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
import { Ionicons } from '@expo/vector-icons';

export default function Attendee (Props) {

	const dropdown = (
		<Ionicons
			name={'md-arrow-dropdown'}
			size={28}
			color={'#C4C4C4'}
		/>
	);

	const dropup = (
		<Ionicons
			name={'md-arrow-dropup'}
			size={28}
			color={'#C4C4C4'}
		/>
	);

	const [expanded, setExpanded] = React.useState(false);
	const [buttonIcon, setButtonIcon] = React.useState(dropdown);

	const onPress = () => {
		if (expanded) {
			setExpanded(false);
			setButtonIcon(dropdown);
		} else {
			setExpanded(true);
			setButtonIcon(dropup);
		}
	};

	const AttendeeInfo = (
		<View>
			<Text style={styles.info}>
				<Text style={styles.heading}>{"Region: "}</Text>
				{Props.attendee.Region}
			</Text>
			<Text style={styles.info}>
				<Text style={styles.heading}>{"Company: "}</Text>
				{Props.attendee.Company}
			</Text>
		</View>
	);

	return (
		<View>
			<View style={styles.item}>
				<Text style={styles.name}> 
					{Props.attendee.First + " " + Props.attendee.Last}
				</Text>
				<Button style={styles.button} icon={buttonIcon} onPress={onPress} type={'clear'}/>
			</View>
			{(expanded) ? AttendeeInfo : null}
			<Divider style={styles.divider} />
		</View>
	);
}

const styles = StyleSheet.create({

	button: {
		flex: 1, 
	},
	item: {
		backgroundColor: '#fff',
		height: 71,
		display: 'flex',
		flexDirection: 'row',
		alignItems: 'center',
	}, 
	name: {
		flexWrap: 'wrap',
		flex: 2,
		color: '#000000',
		marginLeft: 30,
	}, 
	info: {
		paddingLeft: 40, 
		paddingBottom: 10,
		backgroundColor: '#fff',
		color: '#44779F',
		flex: 3,
	}, 
	divider: {
		paddingLeft: 5,
		paddingRight: 5,
		backgroundColor: '#C4C4C4',
	},
	heading: {
		fontWeight: 'bold',
	}
});