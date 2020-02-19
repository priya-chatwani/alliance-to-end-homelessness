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

const Tab = createMaterialTopTabNavigator();

function DirectoryTabNavigator() {
  return (
    <Tab.Navigator
      initialRouteName = "Attendees"
      tabBarOptions = {{
        activeTintColor: Colors.YPOGold,
        labelStyle: {fontSize: 12},
        style: {backgroundColor: Colors.YPOBlue},
        indicatorStyle: {backgroundColor: Colors.YPOGold}
      }}
    >
    <Tab.Screen
      name="Attendees"
      component={Attendees}
      options={{tabBarLabel:"Attendees"}}
    />
    <Tab.Screen
      name="Organizations"
      component={Organizations}
      options={{tabBarLabel:"Organizations"}}
    />
    </Tab.Navigator>
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
  return (
    <NavigationContainer>
      <DirectoryTabNavigator />
    </NavigationContainer>
  );
}
