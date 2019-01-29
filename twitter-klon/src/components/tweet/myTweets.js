import React,{ Component } from 'react';
import { connect } from 'react-redux';
import { fetchMyTweets } from '../../actions';
import Tweet from './tweet';
import './tweets.css';

class MyTweets extends Component {
  componentDidMount() {
    this.props.fetchMyTweets(this.props.auth.email);
  }

  render() {
    return (
      <div className='tweets-container ui feed'>
        {this.props.myTweetList.map(tweet => (
          <Tweet key={tweet.uid} tweet={tweet}/>
        ))}
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    auth: state.auth,
    myTweetList: state.myTweetList
  }
}

export default connect(mapStateToProps, { fetchMyTweets })(MyTweets);
