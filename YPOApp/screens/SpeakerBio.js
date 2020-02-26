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
  const [name, setName] = useState("");
  const [bio, setBio] = useState("");
  const [website, setWebsite] = useState("");

  React.useEffect(() => {
    var query = firebase.database().ref('Speakers/0');
    query.once('value', function(snapshot) {
        var speaker = snapshot.val()
        console.log(speaker)
        setName(speaker.Speaker);
        setBio(speaker.Bio);
        setWebsite(speaker.Website)
    });
  },[]);

  return (
    <View style={styles.container}>
      <Text style={styles.name}>
        {name}
      </Text>
      <Text style={styles.bio}>
        {bio}
      </Text>
    </View>
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
