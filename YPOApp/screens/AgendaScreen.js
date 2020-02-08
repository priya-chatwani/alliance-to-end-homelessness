import * as WebBrowser from 'expo-web-browser';
import React from 'react';
import {
  Image,
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';

export default function AgendaScreen(){
	return (
		<ScrollView style ={styles.AgendaContainer}>
		
		</ScrollView>
	);
}

const styles = StyleSheet.create({
  AgendaContainer: {
    flex: 1,
    paddingTop: 15,
    backgroundColor: '#fff',
  },
});