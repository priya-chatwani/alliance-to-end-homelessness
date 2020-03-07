import * as WebBrowser from 'expo-web-browser';
import React, { useState, useEffect } from 'react';
import { SearchBar } from 'react-native-elements';

import Attendee from '../components/Attendee';

import * as firebase from 'firebase';
import Colors from '../constants/Colors.js';

import {
  Image,
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  ActivityIndicator,
} from 'react-native';

export default function Attendees() {

  const [attendeeList, setattendeeList] = useState([]);

  useEffect(() => {
    var query = firebase.database().ref('Attendees');
    query.once('value', function(snapshot) {
        let tempAttendeeList = [];
        snapshot.forEach(function(childSnapshot) {
          tempAttendeeList.push(childSnapshot.val());
        });
        setattendeeList(tempAttendeeList)
    });
  },[]);

  const AttendeeRender = attendeeList.map((attendee, i) => {
    return (
      <Attendee key={i} attendee={attendee}/>
    );
  });

  const [search, setSearch] = useState('');

  return (AttendeeRender.length != 0 ? (
    <View style={{ flex: 1}}>
      <SearchBar
        showLoading
        platform="ios"
        placeholder='Search'
        value={search}
        onChangeText={(text) => setSearch(text)}
      />
      <ScrollView>
        {AttendeeRender}
      </ScrollView>
    </View>
  ) : (
    <View style={styles.container}>
      <ActivityIndicator size={"large"} color={Colors.YPOBlue}/>
    </View>
  ));
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  }
});
