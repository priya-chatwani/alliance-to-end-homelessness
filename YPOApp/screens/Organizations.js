import * as WebBrowser from 'expo-web-browser';
import React, { useState, useEffect } from 'react';
import { SearchBar } from 'react-native-elements';

import Organization from '../components/Organization';

import * as firebase from 'firebase';
import {
  ScrollView,
  View,
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
      <Organization key={i} organization={organization} onOrgSelect={Props.onOrgSelect} onContactSelect={Props.onContactSelect}/>
    );
  });

  const [search, setSearch] = useState('');

  return (
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
  );
};
