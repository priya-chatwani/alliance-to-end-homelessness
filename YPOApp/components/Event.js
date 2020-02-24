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

import { Ionicons } from '@expo/vector-icons';


import Colors from '../constants/Colors.js'

export default function Event(Props){
	const dropdown = (
		<Ionicons
      name={'md-arrow-dropdown'}
      size={28}
      color={'#fff'}
    />
	);

	const dropup = (
		<Ionicons
    	name={'md-arrow-dropup'}
    	size={28}
     	color={'#fff'}
    />
	);

	const [expanded, setExpanded] = React.useState(false);
	const [buttonIcon, setButtonIcon] = React.useState(dropdown);

	const onPress = () => {
		if(expanded){
			setExpanded(false);
			setButtonIcon(dropdown);
		}else{
			setExpanded(true);
			setButtonIcon(dropup);
		}
	};

	const Speakers = (
		<Text style={styles.speakers}>
			{"Speakers: " + Props.event.Speakers}
		</Text>
	);

	const Location = (
		<Text style={styles.speakers}>
			{"Location: " + Props.event.Location}
		</Text>
	);

	return (
		<View >
			<View style={styles.item}>
				<Text style={styles.time}> 
					{Props.event.Start + "-" + Props.event.End}
				</Text>
				<Text style={styles.title}>
					{Props.event.Title}
				</Text>
				{(Props.event.Speakers.length != 0) ? <Button style={styles.button} icon={buttonIcon} onPress={onPress} type={'clear'}/> : null}
			</View>
			{(expanded) ? Location : null}
			{(expanded) ? Speakers : null}
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
	title: {
		color: '#fff',
		marginRight: 10,
		flexWrap: 'wrap',
		flex: 3,
	}, 
	time: {
			flexWrap: 'wrap',
			flex: 2,
			color: '#fff',
			marginLeft: 10,
			marginRight: 15,
	},
	divider: {
		paddingLeft: 5,
		paddingRight: 5,
		backgroundColor: '#888888',
	}, 
	button: {
		flex: 1, 
	},
	speakers: {
		paddingLeft: 10, 
		paddingTop: 5,
		paddingBottom: 10,
		backgroundColor: '#44779F',
		color: '#fff',

	}
});
