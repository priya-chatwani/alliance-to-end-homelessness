import * as WebBrowser from 'expo-web-browser';
import React, { useState, useEffect } from 'react';
import { SearchBar } from 'react-native-elements';

import Article from '../components/Article';
import Colors from '../constants/Colors.js';

import * as firebase from 'firebase';
import {
  ScrollView,
  View,
  ActivityIndicator,
  StyleSheet
} from 'react-native';

export default function articles() {

  const [articleList, setArticleList] = useState([]);
  const [search, setSearch] = useState('');
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    var query = firebase.database().ref('Articles');
    query.once('value', function(snapshot) {
        let tempArticleList = [];
        snapshot.forEach(function(childSnapshot) {
          tempArticleList.push(childSnapshot.val());
        });
        setArticleList(tempArticleList)
        setIsLoading(false);
    });
  },[]);

  const ArticleRenderer = articleList.filter((article, i) => {
    var name = article.Title.trim().toLowerCase();
    var publisher = article.Publisher.trim().toLowerCase();
    var author = article.Author.trim().toLowerCase();
    var searchClean = search.trim().toLowerCase();
    return name.includes(searchClean) || publisher.includes(searchClean) || author.includes(searchClean);
    }).map((article, i) => {
      return (
        <Article key={i} article={article}/>
      );
    }
  );

  return (!isLoading ? (
    <View style={{ flex: 1}}>
      <SearchBar
        round
        platform="ios"
        placeholder='Search by title, author, publisher'
        value={search}
        onChangeText={(text) => setSearch(text)}
      />
      <ScrollView>
        {ArticleRenderer}
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
  }
});
