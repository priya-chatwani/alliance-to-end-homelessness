import React from 'react';
import { Divider } from 'react-native-elements';
import {
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';

import { Ionicons } from '@expo/vector-icons';

export default function Event(Props) {

	const dropdown = (
		<Ionicons
			style={{margin: 5}}
			name={'md-arrow-dropdown'}
			size={28}
			color={'#888888'}
		/>
	);

	const dropup = (
		<Ionicons
			style={{margin: 5}}
			name={'md-arrow-dropup'}
			size={28}
			color={'#888888'}
		/>
	)
    
	const [expanded, setExpanded] = React.useState(false);
	const [buttonIcon, setButtonIcon] = React.useState(dropdown);

	const onExpand = () => {
		if (expanded) {
			setExpanded(false);
			setButtonIcon(dropdown);
		} else {
			setExpanded(true);
			setButtonIcon(dropup);
		}
	};

	const speakersList = (Props.event.Speakers) ? Props.event.Speakers.split(';') : [];

	const Speakers = speakersList.map((speaker, i) => {
			return (
				<Text key ={i} onPress={() => Props.onSpeakerSelect(speaker)} style={styles.speakersName}>
					{speaker}
				</Text>
			);
		}

	);

	const Location = (
		<Text style={styles.expanded}>
			{"Location: "}
			<Text style={{fontWeight: 'normal'}}>{Props.event.Location}</Text>
		</Text>
	);

	const moderatorsList = (Props.event.Moderators) ? Props.event.Moderators.split(';') : [];

	const Moderators = moderatorsList.map((moderator, i) => {
			return (
				<Text key ={i} onPress={() => Props.onSpeakerSelect(moderator)} style={styles.speakersName}>
					{moderator}
				</Text>
			);
		}
	);

	const ModeratorsRendered = (
		<View style={styles.speakerButton}>
			<Text style={styles.expanded}>
				{"Moderators: "}
			</Text>
			{Moderators}
		</View>
	);

	const Keynote = (
		<Text onPress={() => Props.onSpeakerSelect(Props.event.Keynote)} style={styles.speakersName}>
			{Props.event.Keynote}
		</Text>
	);

	const KeynoteRendered = (
		<View style={styles.speakerButton}>
			<Text style={styles.expanded}>
				{"Keynote: "}
			</Text>
			{Keynote}
		</View>
	);

	const SpeakersRendered = (
		<View style={styles.speakerButton}>
			<Text style={styles.expanded}>
				{"Speakers: "}
			</Text>
			{Speakers}
		</View>
	);

	return (
		<TouchableOpacity style={styles.container} onPress={onExpand} activeOpacity={.80}>
			<View style={styles.item}>
				<Text style={styles.time}>
					{Props.event.Start + "-" + Props.event.End}
				</Text>
				<Text style={styles.title}>
					{Props.event.Title}
				</Text>
				{(Props.event.Location.length != 0) ? buttonIcon : null}
			</View>
			{(expanded) ? Location : null}
			{(expanded && Props.event.Speakers.length != 0) ? SpeakersRendered : null}
			{(expanded && Props.event.Moderators.length != 0) ? ModeratorsRendered : null}
			{(expanded && Props.event.Keynote.length != 0) ? KeynoteRendered : null}
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
		paddingVertical: 10,
		display: 'flex',
		flexDirection: 'row',
		alignItems: 'center',
	},
	title: {
		color: '#000',
		flexWrap: 'wrap',
		flex: 3,
    	marginRight: 5,
	},
	time: {
			flexWrap: 'wrap',
			flex: 2,
			color: '#000',
	},
	expanded: {
    marginVertical: 10,
		backgroundColor: '#fff',
		color: '#000',
		fontWeight: 'bold',

	},
	speakersName: {
		color: '#000',
		fontSize: 14,
		textDecorationLine: 'underline',
    	margin: 6,
	},
	speakerButton: {
		backgroundColor: '#fff',
		flexDirection: 'row',
		flexWrap: 'wrap',
		alignItems: 'center',
	}
});
