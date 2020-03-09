import React from 'react';
import { Divider, Button } from 'react-native-elements';
import {
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';

import { Ionicons } from '@expo/vector-icons';

export default function Attendee (Props) {

	const dropdown = (
		<Ionicons
			style={{margin: 5}}
			name={'md-arrow-dropdown'}
			size={28}
			color={'#C4C4C4'}
		/>
	);

	const dropup = (
		<Ionicons
      style={{margin: 5}}
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
			{(Props.attendee.Region.length > 0) ?
				<Text style={styles.info}>
					<Text style={styles.heading}>{"Region: "}</Text>
					{Props.attendee.Region}
				</Text>
			: null}
			{(Props.attendee.Company.length > 0) ?
				<Text style={styles.info}>
					<Text style={styles.heading}>{"Company: "}</Text>
					{Props.attendee.Company}
				</Text>
			: null}
		</View>
	);

	return (
		<TouchableOpacity onPress={onPress} activeOpacity={.80} style={styles.container}>
			<View style={styles.item}>
				<Text style={styles.name}>
					{Props.attendee.First + " " + Props.attendee.Last}
				</Text>
				{(Props.attendee.Company.length > 0 || Props.attendee.Region.length > 0) ?
					<Button style={styles.button} icon={buttonIcon} onPress={onPress} type={'clear'}/> : null}
			</View>
			{(expanded) ? AttendeeInfo : null}
			<Divider style={{backgroundColor: '#C4C4C4'}} />
		</TouchableOpacity>
	);
}

const styles = StyleSheet.create({
	container: {
		paddingHorizontal: 10,
		backgroundColor: '#fff',
	},
	item: {
		display: 'flex',
		height: 71,
		flexDirection: 'row',
		alignItems: 'center',
	},
	name: {
    fontSize: 16,
		flexWrap: 'wrap',
		flex: 1,
		color: '#000000',
	},
	info: {
    paddingBottom: 10,
		backgroundColor: '#fff',
		color: '#44779F',
	},
	heading: {
		fontWeight: 'bold',
	}
});
