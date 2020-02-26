import * as WebBrowser from 'expo-web-browser';
import { NavigationContainer } from '@react-navigation/native';
import { useNavigation } from '@react-navigation/native';

import { createStackNavigator } from 'react-navigation-stack';
import React, {useState} from 'react';
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
import Day2Agenda from '../screens/Day2Agenda';
import SpeakerBio from '../screens/SpeakerBio';

const Tab = createMaterialTopTabNavigator();

function AgendaTabNavigator(Props){

  const Day1 = () => {
    return (
      <Day1Agenda onSpeakerSelect={Props.onSpeakerSelect}/>
    );
  }

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
        component={Day1}
        options={{tabBarLabel:"Fri, May 1"}}
      />
      <Tab.Screen
        name="Day2"
        component={Day2Agenda}
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

export default function AgendaScreen({navigation}) {
  const onSpeakerSelect = () => {
    navigation.navigate('SpeakerBio');
  }
  return (
    <AgendaTabNavigator onSpeakerSelect={onSpeakerSelect}/>
  );
}
