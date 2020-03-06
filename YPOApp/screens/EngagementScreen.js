import * as WebBrowser from 'expo-web-browser';
import React, { useState, useEffect } from 'react';
import * as firebase from 'firebase';
import { NavigationContainer } from '@react-navigation/native';
import {
  Image,
  Linking,
  Alert,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  View,
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import Articles from '../screens/Articles';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { Button } from 'react-native-elements';
import Colors from '../constants/Colors';

EngagementScreen.navigationOptions = {
  title: 'Engagement',
  headerStyle: {
    backgroundColor: Colors.YPOBlue,
  },
  headerTintColor: '#fff',
};

export default function EngagementScreen({ navigation }) {

  // EngagementScreen.navigationOptions = {
  //   title: 'Engagement',
  //   headerStyle: {
  //     backgroundColor: Colors.YPOBlue,
  //   },
  //   headerTintColor: '#fff',
  // };

	return (
		<View style={styles.container}>
      <Button style={styles.button}
        icon={<Icon
          name="newspaper-o"
          size={150}
          color='white'
        />}
        // title="Articles"
        // titleStyle={styles.text}
        type="clear"
        onPress={() => navigation.navigate('Articles')}
			/>
      <Button style={styles.button}
        icon={<Icon
          name="facebook-official"
          size={150}
          color='white'
        />}
        // title="Facebook Group"
        // titleStyle={styles.text}
        type="clear"
        onPress={() => Linking.openURL('https://www.facebook.com/groups/alliancetoendhomelessness')}
			/>
		</View>
	);
}

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    backgroundColor: '#44779F',
  	flex: 1,
  	flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
  },
  button: {
    margin: 10,
  	padding: 10,
    borderRadius: 20
  },
  text: {
    margin: 10,
    color: 'white',
    fontSize: 24,
    fontWeight: 'bold',
  }
});