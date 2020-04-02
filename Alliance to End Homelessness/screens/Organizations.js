import * as WebBrowser from 'expo-web-browser';
import React, { useState, useEffect } from 'react';
import { SearchBar } from 'react-native-elements';
import Organization from '../components/Organization';
import Colors from '../constants/Colors.js';
import * as firebase from 'firebase';
import {
  ScrollView,
  StyleSheet,
  View,
  ActivityIndicator
} from 'react-native';

export default function Organizations({navigation}) {
  const onOrgSelect = (org) => {
    navigation.navigate('OrgBio', {
      org: org
    });
  }

  const [organizationList, setOrganizationList] = useState([]);
  const [search, setSearch] = useState('');
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    var query = firebase.database().ref('Organizations');
    query.once('value', function(snapshot) {
        let tempOrganizationList = [];
        snapshot.forEach(function(childSnapshot) {
          tempOrganizationList.push(childSnapshot.val());
        });
        setOrganizationList(tempOrganizationList);
        console.log(tempOrganizationList);
        setIsLoading(false);
    });
  },[]);

  const OrganizationRender = organizationList.filter((organization, i) => {
    var name = organization.Organization.trim().toLowerCase();
    var services = organization.Services.trim().toLowerCase();
    var shortDesc = organization.ShortDescription.trim().toLowerCase();
    var searchClean = search.trim().toLowerCase();
    return name.includes(searchClean) || services.includes(searchClean) || shortDesc.includes(searchClean);
  }).map((organization, i) => {
    return (
      <Organization key={i} organization={organization} onOrgSelect={onOrgSelect} />
    );
  });
  

  return (!isLoading ? (
    <View style={{ flex: 1, backgroundColor: '#fff'}}>
      <SearchBar
        round
        platform="ios"
        placeholder='Search by name or keyword (i.e. food, housing)'
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
    backgroundColor: '#fff',
  }
});
