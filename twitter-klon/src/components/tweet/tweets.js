import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchAllTweets } from '../../actions';
import Tweet from './tweet';
import './tweets.css';

class Tweets extends Component {
  componentDidMount() {
    this.props.fetchAllTweets();
  }

  render() {
    return (
      <div className='tweets-container ui feed'>
        {this.props.tweetList.map(tweet => (
          <Tweet key={tweet.uid} tweet={tweet}/>
        ))}
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    tweetList: state.tweetList
  }
}

export default connect(mapStateToProps, { fetchAllTweets })(Tweets);
