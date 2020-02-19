import * as WebBrowser from 'expo-web-browser';
import React from 'react';
import Event from '../components/Event';

import * as firebase from 'firebase';

import {
  Image,
  ScrollView,
  StyleSheet,
  Text,
  View,
  ActivityIndicator,
} from 'react-native';


export default function Day2Agenda(){

const [agendaList, setAgendaList] = React.useState([]);

React.useEffect(() => {
  var query = firebase.database().ref('Agenda/Saturday');
  query.once('value', function(snapshot) {
      let tempAgendaList = [];
      snapshot.forEach(function(childSnapshot) {
        tempAgendaList.push(childSnapshot.val());
      });
      setAgendaList(tempAgendaList)
  });
},[]);



  const Day2Render = agendaList.map((event, i) => {
    return (
      <Event key={i} event={event}/>
    );
  });

	return (
		<ScrollView style={{ flex: 1}}>
        {Day2Render}
    </ScrollView>
	);
}