import React, {useState} from 'react';
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

import SpeakerBio from '../screens/SpeakerBio';


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

	const speakersList = (Props.event.Speakers) ? Props.event.Speakers.split(';') : [];

	const Speakers = speakersList.map((speaker) => {
			return (
				<Button onPress={Props.onSpeakerSelect} type={'clear'} title={speaker} titleStyle={styles.speakersName}/>
			);
		}

	);

	const Location = (
		<Text style={styles.expanded}>
			{"Location: " + Props.event.Location}
		</Text>
	);

	const Moderators = (
		<Text style={styles.expanded}>
			{"Moderators: " + Props.event.Moderators}
		</Text>

	);

	const SpeakersRendered = (
		<View style={styles.speakerButton}>
			<Text style={styles.expanded}>
				{"Speakers: "}
			</Text>
			{ Speakers}
		</View>
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
				{(Props.event.Location.length != 0) ? <Button style={styles.button} icon={buttonIcon} onPress={onPress} type={'clear'}/> : null}
			</View>
			{(expanded) ? Location : null}
			{(expanded && Props.event.Speakers) ? SpeakersRendered : null}
			{(expanded && Props.event.Moderators) ? Moderators : null}
			<Divider style={styles.divider} />
		</View>

	);
}

const styles = StyleSheet.create({
	item: {
		backgroundColor: '#44779F',
		padding: 5,
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
	expanded: {
		padding: 10,
		backgroundColor: '#44779F',
		color: '#fff',
	},
	speakersName: {
		color: '#fff',
		fontSize: 14,
		textDecorationLine: 'underline',

	},
	speakerButton: {
		backgroundColor: '#44779F',
		flexDirection: 'row',
		flexWrap: 'wrap',
		alignItems: 'center',

	}
});
