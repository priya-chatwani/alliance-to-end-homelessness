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

export default function Organization(Props){
  const onPress = () => {

  }

  const buttonIcon = (
    <Ionicons
      name={'md-right-arrow'}
      size={28}
      color={Colors.YPOBlue}
    />
  );
	return (
		<View>
			<View style={styles.item}>
				<Text style={styles.organization}>
					{Props.organization.Organization}
				</Text>
        <Button onPress={onPress} icon={buttonIcon}/>
			</View>
			<Divider style={styles.divider} />
		</View>
	);
}

const styles = StyleSheet.create({
	item: {
		backgroundColor: '#fff',
		height: 71,
		display: 'flex',
		flexDirection: 'row',
		alignItems: 'center',
	},
	organization: {
		flexWrap: 'wrap',
		flex: 2,
		color: '#000000',
		marginLeft: 20,
		marginRight: 10,
	},
	contact: {
		color: '#000000',
		flexWrap: 'wrap',
		flex: 3,
	},
	divider: {
		paddingLeft: 5,
		paddingRight: 5,
		backgroundColor: '#888888',
	}
});
