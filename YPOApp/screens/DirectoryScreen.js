import * as WebBrowser from 'expo-web-browser';

import { NavigationContainer } from '@react-navigation/native';
import React from 'react';
import {
  Image,
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import Colors from '../constants/Colors';
import Attendees from '../screens/Attendees';
import Organizations from '../screens/Organizations';

const DirectoryTab= createMaterialTopTabNavigator();

function DirectoryTabNavigator(Props) {

  const Orgs = () => {
    return (
      <Organizations onOrgSelect={Props.onOrgSelect}/>
    );
  }
  return (
    <DirectoryTab.Navigator
      initialRouteName = "Organizations"
      tabBarOptions = {{
        activeTintColor: Colors.YPOGold,
        labelStyle: {fontSize: 12},
        style: {backgroundColor: Colors.YPOBlue},
        indicatorStyle: {backgroundColor: Colors.YPOGold}
      }}
    >
    <DirectoryTab.Screen
      name="Organizations"
      component={Orgs}
      options={{tabBarLabel:"Organizations"}}
    />
    <DirectoryTab.Screen
      name="Attendees"
      component={Attendees}
      options={{tabBarLabel:"Attendees"}}
    />
    </DirectoryTab.Navigator>
  );
}

DirectoryScreen.navigationOptions = {
  title: 'Directory',
  headerStyle: {
    backgroundColor: Colors.YPOBlue,
  },
  headerTintColor: '#fff',
};

export default function DirectoryScreen() {
  const onOrgSelect = (org) => {
    navigation.navigate('OrgBio', {org: orgs});
  }
  return (
    <NavigationContainer independent={true}>
      <DirectoryTabNavigator onOrgSelect={onOrgSelect}/>
    </NavigationContainer>
  );
}
