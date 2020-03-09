import * as WebBrowser from 'expo-web-browser';
import React, { useState, useEffect } from 'react';
import * as firebase from 'firebase';
import {
  Image,
  ScrollView,
  StyleSheet,
  Text,
  View,
  TouchableOpacity
} from 'react-native';

import Colors from '../constants/Colors';

export default function AboutScreen({ navigation }) {
  const onSpeakerSelect = (speaker) => {
    navigation.navigate('SpeakerBio', {speaker: speaker});
  }

  const [imageUrl1, setImageUrl1] = useState("");
  const ref1 = firebase.storage().ref().child("images/Leaders/sandy.jpg");
  useEffect(() => {
    ref1.getDownloadURL().then(data => {
      setImageUrl1(data);
    }).catch(error => {
      console.log(error);
    })
  }, []);
  const [imageUrl2, setImageUrl2] = useState("");
  const ref2 = firebase.storage().ref().child("images/Leaders/debra.jpg");
  useEffect(() => {
      ref2.getDownloadURL().then(data => {
        setImageUrl2(data);
      }).catch(error => {
        console.log(error);
      })
  }, []);

  const [imageUrl3, setImageUrl3] = useState("");
  const ref3 = firebase.storage().ref().child("images/Leaders/rosie.jpg");
  useEffect(() => {
      ref3.getDownloadURL().then(data => {
        setImageUrl3(data);
      }).catch(error => {
        console.log(error);
      })
  }, []);

  const [imageUrl4, setImageUrl4] = useState("");
  const ref4 = firebase.storage().ref().child("images/Leaders/sandor.jpg");
  useEffect(() => {
      ref4.getDownloadURL().then(data => {
        setImageUrl4(data);
      }).catch(error => {
        console.log(error);
      })
  }, []);

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>
        Alliance To End Homelessness
      </Text>
      <Text style={styles.infoText}>
        Homelessness is a global problem, and a humanitarian crisis. It is complex, and daunting, but it is not insurmountable. The Alliance to End Homelessness event will bring a range of experts from across the world, including policy makers, service providers, creative housing builders, and individuals that have experienced homelessness.
      </Text>
      <Text style={styles.subTitle}>Organizers</Text>
      <View style={styles.row}>
        <View style={styles.column}>
          <TouchableOpacity onPress={() => onSpeakerSelect("Sandy Sigal")}>
            <Image
              source={{ uri: imageUrl1 }}
              style= {styles.firstRow}
            />
          </TouchableOpacity>
          <TouchableOpacity onPress={() => onSpeakerSelect("Debra Fine")}>
            <Image
              source={{ uri: imageUrl2 }}
              style= {styles.firstRow}
            />
          </TouchableOpacity>
        </View>
        <View style={styles.column}>
          <TouchableOpacity onPress={() => onSpeakerSelect("Rosie Donahower")}>
            <Image
              source={{ uri: imageUrl3 }}
              style= {styles.firstRow}
            />
          </TouchableOpacity>
          <TouchableOpacity onPress={() => onSpeakerSelect("Sandor Valner")}>
            <Image
              source={{ uri: imageUrl4 }}
              style= {styles.firstRow}
            />
          </TouchableOpacity>
        </View>  
      </View>  
    </ScrollView> 
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    position: 'absolute',
    padding: 10,
  },
  container2: {
    display: 'flex',
    flex: 1,
  },
  row: {
    display: 'flex',
    flex: 1,
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginBottom: 30
  },
  column: {
    flexDirection: 'column',
    justifyContent: 'space-between',
    flexWrap: 'wrap',
    marginRight: 25,
  },
  firstRow:{
    marginVertical: 8,
    marginHorizontal: 16,
    width: 100,
    height: 100,
    borderRadius: 100/ 2,
  },
  title: {
    fontSize: 30,
    marginVertical: 30,
    color: Colors.YPOBlue,
    textAlign: 'center',
    fontWeight: 'bold',
  },
  infoText: {
    fontSize: 23,
    textAlign: 'center',
  },
  subTitle: {
    fontSize: 25,
    color: Colors.YPOBlue,
    textAlign: 'center',
    fontWeight: 'bold',
    margin: 10,
  },
  code: {
    height: 40,
    width: 300,
    borderColor: 'gray',
    paddingLeft: 5,
    marginTop: 40,
    borderWidth: 1,
    borderRadius: 20,
  },
  buttonTitle: {
    fontSize: 14,
  }
});