import * as WebBrowser from 'expo-web-browser';
import React, {useState} from 'react';
import Event from '../components/Event';
import Colors from '../constants/Colors';

import {
  Image,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from 'react-native';

import * as firebase from 'firebase';

export default function OrgBio(Props){
  const org = Props.navigation.getParam('org')
  return(
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.org}>
        {org.Organization}
      </Text>
      <Text style={styles.description}>
        {org.Description}
      </Text>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 10,
    flexDirection: 'column',
    alignItems: 'center',
  },
  org: {
    fontSize: 30,
    marginTop: 10,
  },
  description: {
    fontSize: 16,
    marginTop: 15,
  }
});
