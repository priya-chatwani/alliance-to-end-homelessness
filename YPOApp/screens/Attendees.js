import * as WebBrowser from 'expo-web-browser';
import React, { useState, useEffect } from 'react';
import { SearchBar } from 'react-native-elements';
import * as firebase from 'firebase';
import {
  Image,
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';

export default function Attendees() {

  const [attendeeList, setattendeeList] = useState([]);
  var ref = firebase.database().ref('Attendees');

  useEffect(() => {
    ref.once('value', function(snapshot) {
      return snapshot.forEach(function(attendeeSnapshot) {
        setattendeeList(attendeeList => [...attendeeList, attendeeSnapshot.val()])
      });
    });
  });  

  return (
    <View style={{ flex: 1, justifyContent: 'flex-start', alignItems: 'flex-start' }}>
      <SearchBar
        showLoading
        platform="ios"
        placeholder='Search' 
      />
    </View>
  );
};