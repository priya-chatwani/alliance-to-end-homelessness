import * as WebBrowser from 'expo-web-browser';
import React, {useState} from 'react';
import Event from '../components/Event';
import Colors from '../constants/Colors';

import {
  Image,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from 'react-native';

import * as firebase from 'firebase';

export default function SpeakerBio(Props){
  const [bio, setBio] = useState("");
  const [website, setWebsite] = useState("");
  const speaker = Props.navigation.getParam('speaker');

  const firebaseRoute = 'Speakers/' + speaker

  React.useEffect(() => {
    var query = firebase.database().ref(firebaseRoute);
    query.once('value', function(snapshot) {
        if (snapshot.exists()){
          var speaker = snapshot.val()
          setBio(speaker.Bio);
          setWebsite(speaker.Website)
        }
    });
  },[]);

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.name}>
        {speaker}
      </Text>
      <Text style={styles.bio}>
        {bio}
      </Text>
    </ScrollView>
  );

}

const styles = StyleSheet.create({
    container: {
      alignItems: 'center',
      padding: 10,
    },
    name: {
      fontSize: 28,
      marginTop: 10,
    },
    bio: {
      fontSize: 16,
      marginTop: 15,
    }
  }
);
