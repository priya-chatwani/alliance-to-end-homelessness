import * as WebBrowser from 'expo-web-browser';
import React from 'react';
import Colors from '../constants/Colors';
import {
  ScrollView,
  StyleSheet,
  Linking,
  Text,
  View,
} from 'react-native';

function infoTitleContact(title, contact, onContactSelect) {
  return(
    <View style={styles.infoItem}>
      <Text style={styles.infoTitle}>
        {title}
      </Text>
      <Text style={styles.linked} onPress={() => onContactSelect(contact)}>
        {contact}
      </Text>
    </View>
  )
}

function infoTitlePhone(title, phoneNumber) {
  return(
    <View style={styles.infoItem}>
      <Text style={styles.infoTitle}>
        {title}
      </Text>
      <Text style={styles.linked} onPress={() => Linking.openURL(`tel:${phoneNumber}`)}>
      {phoneNumber}
      </Text>
    </View>
  )
}

function infoTitleWebsite(title, website) {
  return(
    <View style={styles.infoItem}>
      <Text style={styles.infoTitle}>
        {title}
      </Text>
      <Text style={styles.linked} onPress={() => Linking.openURL(website)}>
        {website}
      </Text>
    </View>
  )
}

function infoTitle(title, info) {
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

function OrgBio(Props) {
  const org = Props.navigation.getParam('org');
  const onContactSelect = Props.navigation.getParam('onContactSelect');
  return(
    <ScrollView contentContainerStyle={styles.container}>
      <View style = {styles.bio}>
        <Text style={styles.orgTitle}>
          {org.Organization}
        </Text>
        <Text style={styles.description}>
          {org.Description}
        </Text>
      </View>
      {org.Contact.length != 0 ? infoTitleContact("Contact: ", org.Contact, onContactSelect)  : null}
      {org.Website.length != 0 ? infoTitleWebsite("Website: ", org.Website) : null}
      {org.Phone.length != 0 ? infoTitlePhone("Phone: ", org.Phone) : null}
      {org.Topic.length != 0 ? infoTitle("Services: ", org.Topic) : null}
    </ScrollView>
  );
}

export default OrgBio;

const styles = StyleSheet.create({
  container: {
    padding: 10,
    flexDirection: 'column',
  },
  linked: {
    fontSize: 16,
    textDecorationLine: 'underline',
  },
  bio: {
    alignItems: 'center',
    marginBottom: 10,
  },
  orgTitle: {
    fontSize: 30,
    marginTop: 10,
    textAlign: 'center' 
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
