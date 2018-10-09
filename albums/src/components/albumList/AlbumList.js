import React, { Component } from 'react';
import { View, Text, ScrollView } from 'react-native';
import axios from 'axios';
import AlbumDetail from './../albumDetail/albumDetail';

class AlbumList extends Component {
  state = { 
    albums: [] 
  }
  componentDidMount(){ 
    axios.get('https://rallycoding.herokuapp.com/api/music_albums')
      .then(response => this.setState({ albums: response.data }));
  }

  renderAlbums() {
    const { albums } = this.state;
    return albums.map((element) => <AlbumDetail album={element} key={element.title}>{element.title}</AlbumDetail>);
  }
  render(){
    return (
      <ScrollView>
        {this.renderAlbums()}
      </ScrollView>  
    );
  }
}

export default AlbumList;
