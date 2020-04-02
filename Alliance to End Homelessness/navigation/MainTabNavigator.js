import React from 'react';
import { Platform } from 'react-native';
import { createStackNavigator } from 'react-navigation-stack';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import {
  Text,
  View,
  StyleSheet
} from 'react-native';
import Colors from '../constants/Colors';
import TabBarIcon from '../components/TabBarIcon';
import AgendaScreen from '../screens/AgendaScreen';
import AboutScreen from '../screens/AboutScreen';
import DirectoryScreen from '../screens/DirectoryScreen';
import Organizations from '../screens/Organizations';
import EngagementScreen from '../screens/EngagementScreen';
import Speakers from '../screens/Speakers';
import SpeakerBio from '../screens/SpeakerBio';
import OrgBio from '../screens/OrgBio';
import Articles from '../screens/Articles';

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

OrgBio.navigationOptions = {
  title: 'Organization Bio',
  headerStyle: {
    backgroundColor: Colors.YPOBlue,
  },
  headerTintColor: '#fff',
}

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

AgendaStack.pat = '';

const OrganizationsStack = createStackNavigator(
  {
    Organizations: Organizations,
    OrgBio: OrgBio,
  },
  config
);

Organizations.navigationOptions = {
  title: 'Organizations',
  headerStyle: {
    backgroundColor: Colors.YPOBlue
  },
  headerTitleStyle: {
    padding: 10
  },
  headerTintColor: '#fff',
}

//https://infinitered.github.io/ionicons-version-3-search/
OrganizationsStack.navigationOptions = {
  tabBarLabel: 'Organizations',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon focused={focused} name={Platform.OS === 'ios' ? 'ios-heart' : 'md-heart'} />
  ),
};

const SpeakersStack = createStackNavigator(
  {
    Speakers: Speakers,
    SpeakerBio: SpeakerBio,
  },
  config
);

Speakers.navigationOptions = {
  title: 'Speakers',
  headerStyle: {
    backgroundColor: Colors.YPOBlue
  },
  headerTitleStyle: {
    padding: 10
  },
  headerTintColor: '#fff',
}

SpeakersStack.navigationOptions = {
  tabBarLabel: 'Speakers',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon focused={focused} name={Platform.OS === 'ios' ? 'ios-person' : 'md-person'} />
  ),
};

SpeakersStack.path = '';

// const DirectoryStack = createStackNavigator(
//   {
//     Directory: DirectoryScreen,
//     OrgBio: OrgBio,
//     SpeakerBio: SpeakerBio,
//   },
//   config
// );

// DirectoryStack.navigationOptions = {
//   tabBarLabel: 'Directory',
//   tabBarIcon: ({ focused }) => (
//     <TabBarIcon focused={focused} name={Platform.OS === 'ios' ? 'ios-search' : 'md-search'} />
//   ),
// };
//
// DirectoryStack.path = '';

const AboutStack = createStackNavigator(
  {
    About: AboutScreen,
    SpeakerBio: SpeakerBio,
  },
  config
 );

 AboutStack.navigationOptions = {
   tabBarLabel: 'About',
   tabBarIcon: ({ focused }) => (
     <TabBarIcon focused={focused} name={Platform.OS === 'ios' ? 'ios-information-circle' : 'md-information-circle'} />
   ),
 };

 AboutScreen.navigationOptions = {
   title: 'About',
   headerStyle: {
     backgroundColor: Colors.YPOBlue,
   },
   headerTintColor: '#fff',
 };

AboutStack.path = '';

const EngagementStack = createStackNavigator(
  {
    Engagement: EngagementScreen,
    Articles: Articles,
  },
  config
);

const ArticlesStack = createStackNavigator(
  {
    Articles: Articles,
  },
  config
);

Articles.navigationOptions = {
  title: 'Articles',
  headerStyle: {
    backgroundColor: Colors.YPOBlue
  },
  headerTitleStyle: {
    padding: 10
  },
  headerTintColor: '#fff',
}

//https://infinitered.github.io/ionicons-version-3-search/
ArticlesStack.navigationOptions = {
  tabBarLabel: 'Articles',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon focused={focused} name={Platform.OS === 'ios' ? 'ios-book' : 'md-book'} />
  ),
};

ArticlesStack.path = '';

EngagementScreen.navigationOptions = {
  title: 'Engagement',
  headerStyle: {
    backgroundColor: Colors.YPOBlue
  },
  headerTitleStyle: {
    padding: 10
  },
  headerTintColor: '#fff',
};

EngagementStack.navigationOptions = {
  tabBarLabel: 'Engagement',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon focused={focused} name={Platform.OS === 'ios' ? 'ios-bulb' : 'md-bulb'} />
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
  OrganizationsStack,
  SpeakersStack,
  ArticlesStack,
  AboutStack
}, tabOptions);

tabNavigator.path = '';

export default tabNavigator;