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

export default function SpeakerBio (Props) {
  const [bio, setBio] = useState("");
  const [website, setWebsite] = useState("");
  const [imageUrl, setImageUrl] = useState("");
  const speaker = Props.navigation.getParam('speaker');
  const nameWithoutSpace = speaker.replace(/\s+/g, '');
  const imagePath = "images/Speakers/" + nameWithoutSpace + ".jpg";

  const firebaseRoute = 'Speakers/' + speaker

  React.useEffect(() => {
    var query = firebase.database().ref(firebaseRoute);
    query.once('value', function(snapshot) {
        if (snapshot.exists()){
          var speaker = snapshot.val();
          setBio(speaker.Bio);
          setWebsite(speaker.Website);
        }
    });
    firebase.storage().ref().child(imagePath).getDownloadURL().then(data => {
			setImageUrl(data);
		}).catch(error => {
			console.log(error);
		})
  },[]);

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.name}>
        {speaker}
      </Text>
      <Image
				source={{ uri: imageUrl }}
				style={styles.image}
			/>
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
    },
    image: {
      marginTop: 10,
      width: 300,
      height: 200,
    }
  }
);
