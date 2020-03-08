import * as WebBrowser from 'expo-web-browser';
import {Dimensions} from 'react-native';
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
<<<<<<< Updated upstream

    <View style={styles.container}>
			<Text style={styles.title}>
       YPO Alliance To End Homelessness
			</Text>

      <Text style={styles.infoText}>
				Homelessness is a globel problem, and a humanitarian crisis. It is complex, and daunting, but it is not insurmountable. We will hear from a range of experts from across the world including, policy makers, service providers, creative housing builders, and individuals that have experienced homelessness.
			</Text>
      <Text style={styles.subTitle}> Organizers </Text>

=======
    <ScrollView style={styles.container}>
      <Text style={styles.title}>
        Alliance To End Homelessness
     
      </Text>
      <Text style={styles.infoText}>
        Homelessness is a globel problem, and a humanitarian crisis. It is complex, and daunting, but it is not insurmountable. We will hear from a range of experts from across the world including, policy makers, service providers, creative housing builders, and individuals that have experienced homelessness.
      </Text>

      <Text style={styles.subTitle}> Organizers </Text>




    <View style={styles.row}>
      

    <View style={styles.columnLeft}>
>>>>>>> Stashed changes

       <Image
        source={{ uri: imageUrl1 }}
        style= {styles.firstRow}
       />

       <Image
         source={{ uri: imageUrl2 }}
         style = {styles.firstRow}
       />

      </View>
      
       <View style={styles.column}>


       <Image
         source={{ uri: imageUrl3 }}
       style={styles.firstRow}
       />


       <Image
         source={{ uri: imageUrl4 }}
       style={styles.firstRow}
       />

      
    
 </View>
       </View>
<<<<<<< Updated upstream
=======

    </ScrollView>

>>>>>>> Stashed changes

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

<<<<<<< Updated upstream
  firstRow:{
    display: 'grid',
    gridTemplateColumns: '60px 60px',
    gridTemplateRows: '60px 60px',
    gridColumn: '2/2',
=======

  row: {

    display: 'flex',
  	flex: 1,
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginBottom: 30

  },
 
 columnLeft: {

  //gridItem: 'width/2',
  flexDirection: 'column',
  justifyContent: 'space-between',
  flexWrap: 'wrap',
  marginRight: 25,


 },

 columnRight: {

  //gridItem: 'width/2',
  flexDirection: 'column',
  justifyContent: 'space-between',
  flexWrap: 'wrap',
  marginRight: 25,


 },

 

  firstRow:{

>>>>>>> Stashed changes
    marginVertical: 8,
    marginHorizontal: 16,

   width: 100,
    height: 100,

    borderRadius: 100/ 2,
  },
<<<<<<< Updated upstream
  secondRow:{
    display: 'grid',
    gridTemplateColumns: '60px 60px',
    gridTemplateRows: '60px 60px',
    gridColumn: '1/2',
    marginVertical: 8,
    marginHorizontal: 16,

   width: 100,
    height: 100,

    borderRadius: 100/ 2,
=======
  secondRow: {
    display: 'flex',
    flex: 1,
    flexDirection: 'row',
    flexWrap: 'wrap',

>>>>>>> Stashed changes
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
<<<<<<< Updated upstream
  },
  hi: {
    display: 'grid',
    gridTemplateRows: '60px 60px',
    gridTemplateColumns: '60px 60 px',
    alignItems: 'center',
    justifyContent: 'center',
    position: 'absolute'
=======
    marginVertical: 30,
>>>>>>> Stashed changes
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
},
);
