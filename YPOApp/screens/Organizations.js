import * as WebBrowser from 'expo-web-browser';
import React, { useState, useEffect } from 'react';
import { SearchBar } from 'react-native-elements';

import Organization from '../components/Organization';
import Colors from '../constants/Colors.js';

import * as firebase from 'firebase';
import {
  ScrollView,
  View,
  ActivityIndicator,
  StyleSheet,
} from 'react-native';

export default function Organizations(Props) {
  const [organizationList, setOrganizationList] = useState([]);
  const [search, setSearch] = useState('');

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

  const OrganizationRender = organizationList.filter((organization, i) => {
    var name = organization.Organization.trim().toLowerCase();
    var topic = organization.Topic.trim().toLowerCase();
    var searchClean = search.trim().toLowerCase();

    return name.includes(searchClean) || topic.includes(searchClean);
  }).map((organization, i) => {
    return (
      <Organization key={i} organization={organization} onOrgSelect={Props.onOrgSelect} />
    );
  });



  return (OrganizationRender.length != 0 ? (
    <View style={{ flex: 1}}>
      <SearchBar
        round
        platform="ios"
        placeholder='Search here...'
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
