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

import Colors from '../constants/Colors.js';
import { Ionicons } from '@expo/vector-icons';

export default function Organization(Props){
  const onPress = () => {
    Props.onOrgSelect(Props.organization);
  }

  const buttonIcon = (
    <Ionicons
      name={'md-arrow-dropright'}
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
        <Button onPress={() => Props.onOrgSelect(Props.organization)} icon={buttonIcon} type={'clear'}/>
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
    padding: 5,
	},
	organization: {
		flexWrap: 'wrap',
		flex: 5,
		color: '#000000',
		marginLeft: 20,
		marginRight: 10,
	},
	divider: {
		paddingLeft: 5,
		paddingRight: 5,
		backgroundColor: '#888888',
	}
});
