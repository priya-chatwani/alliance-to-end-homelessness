import * as WebBrowser from 'expo-web-browser';
import {Dimensions} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import React, { useState, useEffect } from 'react';
import * as firebase from 'firebase';
import {
  Image,
  StyleSheet,
  Linking,
  ScrollView,
  Text,
  View,
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import MaterialIcon from 'react-native-vector-icons/MaterialIcons';
import { Button } from 'react-native-elements';
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
        YPO Alliance To End Homelessness
      </Text>
      <Text style={styles.infoText}>
        Homelessness is a global problem, and a humanitarian crisis. It is complex, and daunting, but it is not insurmountable. 
        Visit our Facebook Group to engage with and learn about this issue from experts around the world, including policy makers, service providers, and creative housing builders.
      </Text>
      {/* https://oblador.github.io/react-native-vector-icons/ */}
      <Button style={styles.button}
        icon={<Icon
          name="facebook-official"
          size={100}
          color='#3b5998'
        />}
        type="clear"
        onPress={() => Linking.openURL('https://www.facebook.com/groups/alliancetoendhomelessness')}
			/>
      <Text style={styles.subTitle}> Organizers </Text>
      <View style={styles.row}>
        <View style={styles.column}>
          <Image
            source={{ uri: imageUrl1 }}
            style= {styles.firstRow}
          />
          <Text style={styles.name}> Sandy Sigal </Text>
          <Image
            source={{ uri: imageUrl2 }}
            style = {styles.firstRow}
          />
          <Text style={styles.name}> Debra Fine </Text>
        </View>
        <View style={styles.column}>
        <Image
          source={{ uri: imageUrl3 }}
          style={styles.firstRow}
        />
        <Text style={styles.name}> Rosie Donahower </Text>
        <Image
          source={{ uri: imageUrl4 }}
          style={styles.firstRow}
        />
        <Text style={styles.name}> Sandor Valner </Text>
     </View>  
    </View>  
    <View>
      <Text style={styles.subTitle}> App Feedback </Text>
      <Text style={styles.infoText}>Please share any feedback and suggestions. We'd love to hear from you!</Text>
      <Button style={styles.button}
        icon={<MaterialIcon
          name="feedback"
          size={100}
          color='#3b5998'
        />}
        type="clear"
        onPress={() => Linking.openURL('https://www.facebook.com/groups/alliancetoendhomelessness')}
			/>
    </View>
  </ScrollView> 
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    position: 'absolute',
    padding: 10
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
    marginBottom: 15
  },
  column: {
    flexDirection: 'column',
    justifyContent: 'space-between',
    flexWrap: 'wrap',
    marginRight: 20,
    marginLeft: 20,
  },
  firstRow:{
    marginVertical: 8,
    marginHorizontal: 16,
    width: 100,
    height: 100,
    borderRadius: 100/ 2,
  },
  title: {
    fontSize: 25,
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
  name: {
    fontSize: 15,
    color: Colors.YPOBlue,
    textAlign: 'center'
  },
  button: {
    marginBottom: 5,
    borderRadius: 20
  },
});