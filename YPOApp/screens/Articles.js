import * as WebBrowser from 'expo-web-browser';
import React, { useState, useEffect } from 'react';
import { SearchBar } from 'react-native-elements';

import Article from '../components/Article';

import * as firebase from 'firebase';
import {
  Image,
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';

export default function articles() {

  const [articleList, setArticleList] = useState([]);

  useEffect(() => {
    var query = firebase.database().ref('Articles');
    query.once('value', function(snapshot) {
        let tempArticleList = [];
        snapshot.forEach(function(childSnapshot) {
          tempArticleList.push(childSnapshot.val());
        });
        setArticleList(tempArticleList)
    });
  },[]);

  const ArticleRenderer = articleList.map((article, i) => {
    return (
      <Article key={i} article={article}/>
    );
  });

  const [search, setSearch] = useState('');

  return (
    <View style={{ flex: 1}}>
      <SearchBar
        showLoading
        platform="ios"
        placeholder='Search'
        value={search}
        onChangeText={(text) => setSearch(text)}
      />
      <ScrollView>
        {ArticleRenderer}
      </ScrollView>
    </View>
  );
};
