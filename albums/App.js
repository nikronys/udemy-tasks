import React, { Component } from 'react';
import {
  StyleSheet, Text, View,
} from 'react-native';
import Header from './src/components/header/header';
import AlbumList from './src/components/albumList/AlbumList';

export default class App extends Component {
  render() {
    return (
      <View>
        <Header />
        <AlbumList />
      </View>
    );
  }
}
