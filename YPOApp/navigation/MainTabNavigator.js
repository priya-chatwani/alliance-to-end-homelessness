import React from 'react';
import { Platform } from 'react-native';
import { createStackNavigator } from 'react-navigation-stack';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import Colors from '../constants/Colors';

import TabBarIcon from '../components/TabBarIcon';
import AgendaScreen from '../screens/AgendaScreen';
import DirectoryScreen from '../screens/DirectoryScreen';
import SettingsScreen from '../screens/SettingsScreen';
import SpeakerBio from '../screens/SpeakerBio';
import { NavigationContainer } from 'react-navigation';
import LearningScreen from '../screens/LearningScreen';

const config = Platform.select({
  web: { headerMode: 'screen' },
  default: {},
});

SpeakerBio.navigationOptions = {
  title: 'Speaker Bio',
  headerStyle: {
    backgroundColor: Colors.YPOBlue,
  },
  headerTintColor: '#fff',
};

const AgendaStack = createStackNavigator(
  {
    Agenda: AgendaScreen,
    SpeakerBio: SpeakerBio,
  },
  config
);

AgendaStack.navigationOptions = {
  tabBarLabel: 'Agenda',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon focused={focused} name='ios-time'/>
  ),
};

AgendaStack.path = '';

const DirectoryStack = createStackNavigator(
  {
    Directory: DirectoryScreen,
  },
  config
);

DirectoryStack.navigationOptions = {
  tabBarLabel: 'Directory',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon focused={focused} name={Platform.OS === 'ios' ? 'ios-people' : 'md-people'} />
  ),
};

DirectoryStack.path = '';

const LearningStack = createStackNavigator(
  {
    Learning: LearningScreen,
  },
  config
);

LearningStack.navigationOptions = {
  tabBarLabel: 'Learning',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon focused={focused} name={'ios-star'} />
  ),
};

LearningStack.path = '';

const SettingsStack = createStackNavigator(
  {
    Settings: SettingsScreen,
  },
  config
);

SettingsStack.navigationOptions = {
  tabBarLabel: 'Settings',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon focused={focused} name={Platform.OS === 'ios' ? 'ios-options' : 'md-options'} />
  ),
};

SettingsStack.path = '';

const tabOptions = {
    tabBarOptions: {
        style:{
            backgroundColor:Colors.YPOBlue,
        },
        showLabel: false,
    },
}

const tabNavigator = createBottomTabNavigator({
  AgendaStack,
  DirectoryStack,
  LearningStack,
  SettingsStack,
}, tabOptions);

tabNavigator.path = '';

export default tabNavigator;
