import React, { Component } from 'react';
import firebase from 'firebase';
import thunk from 'redux-thunk';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import reducers from './reducers';
import Router from './router';

class App extends Component {
  componentDidMount() {
    const config = {
      apiKey: 'AIzaSyDyLIJKvJUZNR964Y7fjxluslaTg6aPikE',
      authDomain: 'manager-cad17.firebaseapp.com',
      databaseURL: 'https://manager-cad17.firebaseio.com',
      projectId: 'manager-cad17',
      storageBucket: 'manager-cad17.appspot.com',
      messagingSenderId: '818705159973',
    };
    firebase.initializeApp(config);
  }

  render() {
    return (
      <Provider store={createStore(reducers, {}, applyMiddleware(thunk))}>
        <Router />
      </Provider>
    );
  }
}

export default App;
