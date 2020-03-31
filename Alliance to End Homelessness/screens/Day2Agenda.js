import * as WebBrowser from 'expo-web-browser';
import React from 'react';
import Event from '../components/Event';

import * as firebase from 'firebase';
import Colors from '../constants/Colors.js';

import {
  Image,
  ScrollView,
  StyleSheet,
  Text,
  View,
  ActivityIndicator,
} from 'react-native';


export default function Day2Agenda(Props){

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
      <Event key={i} event={event} onSpeakerSelect={Props.onSpeakerSelect}/>
    );
  });

	return (Day2Render.length != 0 ? (
		<ScrollView style={{ flex: 1}}>
        {Day2Render}
    </ScrollView>
	) : (
    <View style={styles.container}>
      <ActivityIndicator size={"large"} color={Colors.YPOBlue}/>
    </View>
  ));
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  }
});
