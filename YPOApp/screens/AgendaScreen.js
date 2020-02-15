import * as WebBrowser from 'expo-web-browser';
import { NavigationContainer } from '@react-navigation/native';
import React from 'react';
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

// Get a reference to the database service
//var database = firebase.database();

var day = 'Friday';
function readUserData() {
  firebase.database().ref('Agenda/' + day + '/').once('value', function (snapshot) {
    console.log(snapshot.val())
  });
}

const Tab = createMaterialTopTabNavigator();

function AgendaTabNavigator(){
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
