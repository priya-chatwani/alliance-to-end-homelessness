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
  const [search, setSearch] = useState('');

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

  const AttendeeRender = attendeeList.filter((attendee, i) => {
    var firstName = attendee.First.trim().toLowerCase();
    var lastName = attendee.Last.trim().toLowerCase();
    var fullName = firstName + " " + lastName;
    var company = attendee.Company.trim().toLowerCase();
    var searchClean = search.trim().toLowerCase();

    if(searchClean == "") return true;

    return (firstName.substring(0,searchClean.length) == searchClean ||
            lastName.substring(0,searchClean.length) == searchClean ||
            fullName.substring(0,searchClean.length) == searchClean) ||
            company.substring(0,searchClean.length) == searchClean;

  }).map((attendee, i) => {
    return (
      <Attendee key={i} attendee={attendee}/>
    );
  });

  return (AttendeeRender.length != 0 ? (
    <View style={{ flex: 1}}>
      <SearchBar
        round
        platform="ios"
        placeholder="Search here..."
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
