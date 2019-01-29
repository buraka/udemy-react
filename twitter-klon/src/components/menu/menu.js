import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { logout } from '../../actions';

class Menu extends Component {

  render() {
    const { isLoggedIn } = this.props.auth;
    return isLoggedIn === true ? (
      <div className='ui secondary  menu'>
        <Link className='item' to='/'> Tweetler </Link>
        <Link className='item' to='/myTweets'> Benim Tweetlerim </Link>
        <Link className='item' to='/newTweet'> Yeni Tweet </Link>
        <div className='right menu'>
          <Link className='item' to='/' onClick={() => {
            this.props.logout();
          }}> Çıkış yap </Link>
        </div>
      </div>
    ) : (
      <div className='ui secondary  menu'>
        <Link className='item' to='/'> Tweetler </Link>
        <div className='right menu'>
          <Link className='item' to='/login'> Giriş yap </Link>
        </div>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  console.log(state);
  return {
    auth: state.auth
  }
}

export default connect(mapStateToProps, { logout })(Menu);
