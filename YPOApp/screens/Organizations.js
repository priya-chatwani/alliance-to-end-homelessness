import * as WebBrowser from 'expo-web-browser';
import React, { useState, useEffect } from 'react';
import { SearchBar } from 'react-native-elements';

import Organization from '../components/Organization';
import Colors from '../constants/Colors.js';

import * as firebase from 'firebase';
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

export default function Organizations(Props) {

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
      <Organization key={i} organization={organization} onOrgSelect={Props.onOrgSelect}/>
    );
  });

  const [search, setSearch] = useState('');

  return (OrganizationRender.length != 0 ? (
    <View style={{ flex: 1}}>
      <SearchBar
        showLoading
        platform="ios"
        placeholder='Search'
        value={search}
        onChangeText={(text) => setSearch(text)}
      />
      <ScrollView>
        {OrganizationRender}
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
