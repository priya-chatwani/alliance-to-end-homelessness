import React from 'react';
import { Platform } from 'react-native';
import { createStackNavigator } from 'react-navigation-stack';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import Colors from '../constants/Colors';

import TabBarIcon from '../components/TabBarIcon';
import AgendaScreen from '../screens/AgendaScreen';
import DirectoryScreen from '../screens/DirectoryScreen';
import SpeakerBio from '../screens/SpeakerBio';
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

DirectoryScreen.navigationOptions = {
  title: 'Directory',
  headerStyle: {
    backgroundColor: Colors.YPOBlue,
  },
  headerTintColor: '#fff',
};

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
}, tabOptions);

tabNavigator.path = '';

export default tabNavigator;
