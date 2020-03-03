import React from 'react';
import { Platform } from 'react-native';
import { createStackNavigator } from 'react-navigation-stack';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import Colors from '../constants/Colors';

import TabBarIcon from '../components/TabBarIcon';
import AgendaScreen from '../screens/AgendaScreen';
import DirectoryScreen from '../screens/DirectoryScreen';
import EngagementScreen from '../screens/EngagementScreen';
import SpeakerBio from '../screens/SpeakerBio';

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
    <TabBarIcon focused={focused} name={Platform.OS === 'ios' ? 'ios-search' : 'md-search'} />
  ),
};

DirectoryStack.path = '';

const EngagementStack = createStackNavigator(
  {
    Engagement: EngagementScreen,
  },
  config
);

EngagementStack.navigationOptions = {
  tabBarLabel: 'Engagement',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon focused={focused} name={Platform.OS === 'ios' ? 'ios-bulb' : 'md-bulb'} />
  ),
};

EngagementStack.path = '';

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
  EngagementStack,
}, tabOptions);

tabNavigator.path = '';

export default tabNavigator;
