import React , { Component } from 'react';
import { Router, Route, Switch } from 'react-router-dom';
import Menu from './menu/menu';
import Tweets from './tweet/tweets';
import MyTweets from './tweet/myTweets';
import NewTweet from './tweet/newTweet/newTweet';
import Login from './login/login';
import firebase from 'firebase/app';
import history from '../history';
import { isLoggedIn } from '../actions';
import { connect } from 'react-redux';

class App extends Component {

  componentWillMount() {
    firebase.initializeApp({
      apiKey: "AIzaSyCtBRvbHrBafvuPwfKvyyQl1MYcU7NRoyM",
      authDomain: "twitterklon-react.firebaseapp.com",
      databaseURL: "https://twitterklon-react.firebaseio.com",
      projectId: "twitterklon-react",
      storageBucket: "twitterklon-react.appspot.com",
      messagingSenderId: "964104291543"
    });

    this.props.isLoggedIn();
  }

  render() {
    return (
      <Router history={history}>
        <div>
          <Menu />
          <Switch>
            <Route path='/' exact component={Tweets} />
            <Route path='/myTweets' component={MyTweets} />
            <Route path='/newTweet' component={NewTweet} />
            <Route path='/editTweet' component={NewTweet} />
            <Route path='/login' component={Login} />
          </Switch>
        </div>
      </Router>
    )
  }
}

export default connect(null, { isLoggedIn })(App);
