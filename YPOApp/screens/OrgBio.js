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

function infoTitle(title, info){
  return(
    <View style={styles.infoItem}>
      <Text style={styles.infoTitle}>
        {title}
      </Text>
      <Text style={{fontSize: 16}}>
        {info}
      </Text>
    </View>
  )
}

export default function OrgBio(Props){
  const org = Props.navigation.getParam('org')
  return(
    <ScrollView contentContainerStyle={styles.container}>
      <View style = {styles.bio}>
        <Text style={styles.org}>
          {org.Organization}
        </Text>
        <Text style={styles.description}>
          {org.Description}
        </Text>
      </View>
      {org.Contact.length != 0 ? infoTitle("Contact: ", org.Contact) : null}
      {org.Contact.length != 0 ? infoTitle("Website: ", org.Website) : null}
      {org.Phone.length != 0 ? infoTitle("Phone: ", org.Phone) : null}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 10,
    flexDirection: 'column',
  },
  bio: {
    alignItems: 'center',
    marginBottom: 10,
  },
  org: {
    fontSize: 30,
    marginTop: 10,
  },
  description: {
    fontSize: 16,
    marginTop: 15,
  },
  infoItem: {
    flexDirection: 'row',
    paddingBottom: 5,
  },
  infoTitle: {
    fontWeight: 'bold',
    fontSize: 16,
  },
});
