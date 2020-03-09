import * as WebBrowser from 'expo-web-browser';
import React, {useState} from 'react';
import Colors from '../constants/Colors';
import {
  ActivityIndicator,
  Image,
  ScrollView,
  StyleSheet,
  Text,
  Linking,
  View
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
      {imageUrl.length == 0 ? 
        <ActivityIndicator style={styles.image} size={"large"} color={Colors.YPOBlue}/> :
        <Image
          source={{ uri: imageUrl }}
          style={styles.image}
        />
      }
      <Text style={styles.bio}>
        {bio}
      </Text>
      {website.length > 0 ?
        <View style={styles.website}>
          <Text style={styles.infoTitle}>Website: </Text>
          <Text style={styles.linked} onPress={() => Linking.openURL(website)}>{website}</Text>
        </View>
      : 
      null
      }
    </ScrollView>
  );

}

const styles = StyleSheet.create({
    container: {
      alignItems: 'center',
      padding: 10,
    },
    linked: {
      fontSize: 16,
      textDecorationLine: 'underline',
    },
    name: {
      fontSize: 28,
      marginTop: 10
    },
    bio: {
      fontSize: 16,
      marginTop: 15,
    },
    image: {
      marginTop: 10,
      width: 300,
      height: 200,
      resizeMode: 'contain',
    },
    infoTitle: {
      fontWeight: 'bold',
      fontSize: 16,
    },
    website: {
      marginTop: 15,
      flexDirection: 'row',
      flex: 1,
      alignSelf: 'flex-start',
      flexWrap: 'wrap'
    }
  }
);
