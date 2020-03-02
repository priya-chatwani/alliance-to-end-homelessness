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
import Articles from '../screens/Articles';

const Tab = createMaterialTopTabNavigator();

function EngagementTabNavigator() {
  return (
    <Tab.Navigator
      initialRouteName = "Articles"
      tabBarOptions = {{
        activeTintColor: Colors.YPOGold,
        labelStyle: {fontSize: 12},
        style: {backgroundColor: Colors.YPOBlue},
        indicatorStyle: {backgroundColor: Colors.YPOGold}
      }}
    >
    <Tab.Screen
      name="Articles"
      component={Articles}
      options={{tabBarLabel:"Articles"}}
    />
    </Tab.Navigator>
  );
}

EngagementScreen.navigationOptions = {
  title: 'Engagement',
  headerStyle: {
    backgroundColor: Colors.YPOBlue,
  },
  headerTintColor: '#fff',
};

export default function EngagementScreen() {
  return (
    <NavigationContainer independent={true}>
      <EngagementTabNavigator />
    </NavigationContainer>
  );
}
