import * as WebBrowser from 'expo-web-browser';
import React, { useState, useEffect } from 'react';
import { SearchBar } from 'react-native-elements';

import Organization from '../components/Organization';

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

export default function Organizations() {

  const [organizationList, setOrganizationList] = useState([]);
  
  useEffect(() => {
    var query = firebase.database().ref('Organizations');
    query.once('value', function(snapshot) {
        let tempOrganizationList = [];
        snapshot.forEach(function(childSnapshot) {
          tempOrganizationList.push(childSnapshot.val());
        });
        setOrganizationList(tempOrganizationList)
    });
  },[]);

  const OrganizationRender = organizationList.map((organization, i) => {
    return (
      <Organization key={i} organization={organization}/>
    );
  });

  return (
    <View style={{ flex: 1}}>
      <SearchBar
        platform="ios"
        placeholder='Search' 
      />
      <ScrollView>
        {OrganizationRender}
      </ScrollView>
    </View>
  );
};