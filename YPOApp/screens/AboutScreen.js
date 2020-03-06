import * as WebBrowser from 'expo-web-browser';
import { NavigationContainer } from '@react-navigation/native';
import React, { useState, useEffect } from 'react';
import * as firebase from 'firebase';
import {
  Image,
  ScrollView,
  Flatlist,
  ActivityIndicator,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';

import Colors from '../constants/Colors';


export default function AboutScreen({ navigation }) {

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
    <View style={styles.container}>
      <Text style={styles.title}>
        Alliance To End Homelessness
      </Text>
      <Text style={styles.infoText}>
        Homelessness is a globel problem, and a humanitarian crisis. It is complex, and daunting, but it is not insurmountable. We will hear from a range of experts from across the world including, policy makers, service providers, creative housing builders, and individuals that have experienced homelessness.
      </Text>
      <Text style={styles.subTitle}> Organizers </Text>
      <Image
        source={{ uri: imageUrl1 }}
        style={styles.firstRow}
      />
      <Image
        source={{ uri: imageUrl2 }}
        style = {styles.secondRow}
      />
      <Image
        source={{ uri: imageUrl3 }}
        style={styles.firstRow}
      />
      <Image
        source={{ uri: imageUrl4 }}
        style={styles.firstRow}
      />
    </View>

	);
}

const styles = StyleSheet.create({
  container: {
  	display: 'flex',
  	flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    position: 'absolute',
  },
  firstRow:{
    marginVertical: 8,
    marginHorizontal: 16,
    width: 100,
    height: 100,
    borderRadius: 100/ 2,
  },
  secondRow: {
    marginVertical: 8,
    marginHorizontal: 16,
    width: 100,
    height: 100,
    borderRadius: 100/ 2,
  },
  title: {
  	fontSize: 30,
  	color: Colors.YPOBlue,
  	textAlign: 'center',
  	fontWeight: 'bold',
  },
  infoText: {
    fontSize: 18,
    textAlign: 'center'
  },
  subTitle: {
    fontSize: 25,
  	color: Colors.YPOBlue,
  	textAlign: 'center',
  	fontWeight: 'bold',
  },
  hi: {
    alignItems: 'center',
    justifyContent: 'center',
    position: 'absolute'
  },
  code: {
  	height: 40,
  	width: 300,
  	borderColor: 'gray',
  	paddingLeft: 5,
  	marginTop: 40,
  	borderWidth: 1,
  	borderRadius: 20,
  }
});
