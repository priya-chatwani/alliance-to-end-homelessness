import * as WebBrowser from 'expo-web-browser';
import React, { useState, useEffect } from 'react';
import { SearchBar } from 'react-native-elements';
import Speaker from '../components/Speaker';
import Colors from '../constants/Colors.js';
import * as firebase from 'firebase';
import {
  ScrollView,
  StyleSheet,
  View,
  ActivityIndicator
} from 'react-native';

export default function Speakers({navigation}) {
  const onSpeakerSelect = (speaker) => {
    navigation.navigate('SpeakerBio', {speaker: speaker});
  }

  const [speakerList, setSpeakerList] = useState([]);
  const [search, setSearch] = useState('');
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    var query = firebase.database().ref('SpeakersList');
    query.once('value', function(snapshot) {
        let tempSpeakerList = [];
        snapshot.forEach(function(childSnapshot) {
          tempSpeakerList.push(childSnapshot.val());
        });
        setSpeakerList(tempSpeakerList);
        console.log(tempSpeakerList);
        setIsLoading(false);
    });
  },[]);

  const SpeakerRender = speakerList.filter((speaker, i) => {
    var name = speaker.Name.trim().toLowerCase();
    var searchClean = search.trim().toLowerCase();
    return name.includes(searchClean);
  }).map((speaker, i) => {
    return (
      <Speaker key={i} speaker={speaker} onSpeakerSelect={onSpeakerSelect} />
    );
  });
  

  return (!isLoading ? (
    <View style={{ flex: 1, backgroundColor: '#fff'}}>
      <SearchBar
        round
        platform="ios"
        placeholder='Search keywords: housing, food, employment, ...)'
        value={search}
        onChangeText={(text) => setSearch(text)}
      />
      <ScrollView>
        {SpeakerRender}
      </ScrollView>
    </View>
  ) : (
    <View style={styles.container}>
      <ActivityIndicator size={"large"} color={Colors.YPOBlue}/>
    </View>
  ));
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#fff',
  }
});