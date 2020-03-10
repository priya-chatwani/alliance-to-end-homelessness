import * as WebBrowser from 'expo-web-browser';
import React from 'react';
import Event from '../components/Event';
import * as firebase from 'firebase';
import Colors from '../constants/Colors.js';
import {
  ScrollView,
  StyleSheet,
  View,
  ActivityIndicator,
} from 'react-native';


export default function Day1Agenda(Props){
const [agendaList, setAgendaList] = React.useState([]);


React.useEffect(() => {
  var query = firebase.database().ref('Agenda/Friday');
  query.once('value', function(snapshot) {
      let tempAgendaList = [];
      snapshot.forEach(function(childSnapshot) {
        tempAgendaList.push(childSnapshot.val());
      });
      setAgendaList(tempAgendaList)
  });
},[]);



  const Day1Render = agendaList.map((event, i) => {
    return  (
      <Event key={i} event={event} onSpeakerSelect={Props.onSpeakerSelect}/>
    );
  }, [Props]);

	return (
    Day1Render.length != 0 ? (
      <ScrollView style={{ flex: 1}}>
          {Day1Render.filter(Boolean)}
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
