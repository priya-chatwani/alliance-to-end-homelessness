import * as WebBrowser from 'expo-web-browser';
import { NavigationContainer } from '@react-navigation/native';
import React, {useState} from 'react';
import * as firebase from 'firebase';
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
import Day1Agenda from '../screens/Day1Agenda';

const Tab = createMaterialTopTabNavigator();

function AgendaTabNavigator(){
  
  var ref = firebase.database().ref('Agenda/Friday');
  ref.once('value', function(snapshot) {
      snapshot.forEach(function(eventSnapshot) {
        //console.log(eventSnapshot.val());
        var start = eventSnapshot.val().Start;
        var end = eventSnapshot.val().End;
        var title = eventSnapshot.val().Title;
        var location = eventSnapshot.val().Location;
        var notes = eventSnapshot.val().Notes;
        var isBreakout = eventSnapshot.val().Breakout;
        var keynote = eventSnapshot.val().Keynote;
        var moderators = eventSnapshot.val().Moderators;
        var speakers = eventSnapshot.val().Speakers;
      });
  });

  return (
    <Tab.Navigator
      initialRouteName = "Day1"
      tabBarOptions = {{
        activeTintColor: Colors.YPOGold,
        labelStyle: {fontSize: 12},
        style: {backgroundColor: Colors.YPOBlue},
        indicatorStyle: {backgroundColor: Colors.YPOGold}
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

AgendaScreen.navigationOptions = {
  title: 'Agenda',
  headerStyle: {
    backgroundColor: Colors.YPOBlue,
  },
  headerTintColor: '#fff',
};

export default function AgendaScreen() {
  return (
    <NavigationContainer>
      <AgendaTabNavigator />
    </NavigationContainer>
  );
}
