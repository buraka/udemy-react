import React , { Component } from 'react';
import { Router, Route, Switch } from 'react-router-dom';
import createHistory from 'history/createBrowserHistory';
import Menu from './menu/menu';
import Tweets from './tweet/tweets';
import MyTweets from './tweet/myTweets';
import Login from './login/login';
import firebase from 'firebase/app';

class App extends Component {

  componentDidMount() {
    firebase.initializeApp({
      apiKey: "AIzaSyCtBRvbHrBafvuPwfKvyyQl1MYcU7NRoyM",
      authDomain: "twitterklon-react.firebaseapp.com",
      databaseURL: "https://twitterklon-react.firebaseio.com",
      projectId: "twitterklon-react",
      storageBucket: "twitterklon-react.appspot.com",
      messagingSenderId: "964104291543"
    });
  }

  render() {
    return (
      <Router history={createHistory()}>
        <div>
          <Menu />
          <Switch>
            <Route path='/' exact component={Tweets} />
            <Route path='/myTweets' component={MyTweets} />
            <Route path='/login' component={Login} />
          </Switch>
        </div>
      </Router>
    )
  }
}

export default App;
