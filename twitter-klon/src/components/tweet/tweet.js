import React from 'react';
import { withRouter } from 'react-router-dom';
import './tweets.css';

const decideDate = (date) => {
  let result = '';
  const diffMS = new Date().getTime() - new Date(date).getTime();
  const min = parseInt(diffMS / 1000 / 60); //tam sayi olarak dk var.
  const hour = parseInt(min / 60); // saat
  const day = parseInt(hour / 24); //day

  if (min < 1) {
    result = 'Yaklaşık bir dakika önce';
  } else {
    if (hour < 1) {
      result = min + ' dakika önce';
    } else {
      if (day < 1) {
        result = hour + ' saat önce';
      } else {
        result = day + ' gün önce';
      }
    }
  }
  return result;
}

const Tweet = ({ tweet, history }) => {
  return (
    <div className="tweet-wrapper event"
         onClick={() => {
           history.push({
             pathname: '/editTweet',
             state: {
               tweet
             }
           });
         }}>
      <div className="content">
        <div className="summary">
          {tweet.email}
          <div className="date">
            {decideDate(tweet.date)}
          </div>
        </div>
        <div className="extra text">
          {tweet.tweet}
        </div>
      </div>
    </div>
  )
}

export default withRouter(Tweet);
