import React from 'react';
import { ListItem, Divider, Button } from 'react-native-elements';
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

	const ArticleInfo = (
		<View>
			{(Props.article.Author) ?
				<Text style={styles.info}>
					<Text style={styles.heading}>{"Author: "}</Text>
					{Props.article.Author}
				</Text>
			: null}
			{(Props.article.Publisher) ?
				<Text style={styles.info}>
					<Text style={styles.heading}>{"Publisher: "}</Text>
					{Props.article.Publisher}
				</Text>
			: null}
		</View>
	);

	return (
		<View>
			<View style={styles.item}>
				<Text style={styles.title} onPress={() => Linking.openURL(Props.article.Link)}>
					{Props.article.Title}
				</Text>
				<Button style={styles.button} icon={buttonIcon} onPress={onPress} type={'clear'}/>
			</View>
			{(expanded) ? ArticleInfo : null}
			<Divider style={styles.divider} />
		</View>
	);
}

const styles = StyleSheet.create({

	button: {
		flex: 1,
		marginRight: 15,
	},
	item: {
		backgroundColor: '#fff',
		height: 71,
		display: 'flex',
		flexDirection: 'row',
		alignItems: 'center',
	},
	title: {
		flexWrap: 'wrap',
		flex: 2,
		color: '#000000',
		marginLeft: 20,
		marginRight: 10,
		textDecorationLine: 'underline',
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
	divider: {
		paddingLeft: 5,
		paddingRight: 5,
		backgroundColor: '#C4C4C4',
	}
});
