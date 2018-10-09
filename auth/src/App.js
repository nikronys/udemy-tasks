import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { Header, Spinner, Button, Card, CardSection } from './components/common';
import firebase from 'firebase';
import LoginForm from './components/LoginForm';

class App extends Component {
  state = { loggedin: null }
  componentDidMount() {
    firebase.initializeApp(
      {
        apiKey: "AIzaSyB12Q34ydygAhJlrLEAO9qAV6cpoRIvbdk",
        authDomain: "auth-9c6e0.firebaseapp.com",
        databaseURL: "https://auth-9c6e0.firebaseio.com",
        projectId: "auth-9c6e0",
        storageBucket: "auth-9c6e0.appspot.com",
        messagingSenderId: "614834532947"
      }
    );
    firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        this.setState({ loggedin: true });
      } else {
        this.setState({ loggedin: false });
      }
    });
  }
  renderContent() {
    switch (this.state.loggedin) {
      case true:
        return (<Card><CardSection><Button onPress={() => firebase.auth().signOut()}>Log Out</Button></CardSection></Card>);
      case false:
        return <LoginForm />;
      default:
        return <Spinner size='large' />
    }
  }
  render() {
    return (
      <View>
        <Header headerText='Authentication' />
        {this.renderContent()}
      </View>
    );
  }
}

export default App;
