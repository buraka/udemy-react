import React, { Component } from 'react';
import firebase from 'firebase';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Login from './login';

const page1 = () => (
  <div>
page1
  </div>
)

class App extends Component {
  componentDidMount() {
    firebase.initializeApp({
      apiKey: 'AIzaSyCJhtvn-BrShjfykf8P-A-22QsNA2rmprA',
      authDomain: 'authentication-3205a.firebaseapp.com',
      databaseURL: 'https://authentication-3205a.firebaseio.com',
      projectId: 'authentication-3205a',
      storageBucket: 'authentication-3205a.appspot.com',
      messagingSenderId: '834761648773'
    });
  }

  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route path='/login' component={Login} />
          <Route path='/' component={page1} />
        </Switch>
      </BrowserRouter>
    )
  }
}

export default App;
