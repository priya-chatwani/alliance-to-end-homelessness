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
  const [search, setSearch] = useState('');
  
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

  const ArticleRenderer = articleList.filter((article, i) => {
    var name = article.Title.trim().toLowerCase();
    var searchClean = search.trim().toLowerCase();

    return name.includes(searchClean);
  }).map((article, i) => {
    return (
      <Article key={i} article={article}/>
    );
  });


  return (
    <View style={{ flex: 1}}>
      <SearchBar
        round
        platform="ios"
        placeholder='Search here...'
        value={search}
        onChangeText={(text) => setSearch(text)}
      />
      <ScrollView>
        {ArticleRenderer}
      </ScrollView>
    </View>
  );
};
