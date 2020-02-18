import * as WebBrowser from 'expo-web-browser';
import React from 'react';
import { SearchBar } from 'react-native-elements';
import {
  Image,
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';


export default function Attendees(){
	return (
		<View style={{ flex: 1, justifyContent: 'flex-start', alignItems: 'flex-start' }}>
      <SearchBar
         showLoading
         platform="ios"
         placeholder='Search' />
    	</View>
	);
}