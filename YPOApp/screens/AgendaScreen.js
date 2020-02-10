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
import {YPOBlue, YPOGold} from '../constants/Colors';
import Day1Agenda from '../screens/Day1Agenda';

const Tab = createMaterialTopTabNavigator();

function AgendaTabNavigator(){
  return (
    <Tab.Navigator
      initialRouteName = "Day1"
      tabBarOptions = {{
        activeTintColor: '#d69d23',
        labelStyle: {fontSize: 12},
        style: {backgroundColor: '#083050'},
        indicatorStyle: {backgroundColor: '#d69d23'}
      }}
    >
      <Tab.Screen
        name="Day1"
        component={Day1Agenda}
        options={{tabBarLabel:"Fri, May 1"}}
      />
      <Tab.Screen
        name="Day2"
        component={Day1Agenda}
        options={{tabBarLabel:"Sat, May 2"}}
      />
    </Tab.Navigator>
  );
}

export default function AgendaScreen() {
  return (
    <NavigationContainer>
      <AgendaTabNavigator />
    </NavigationContainer>
  );
}
