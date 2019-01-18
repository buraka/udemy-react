import React from 'react';
import { Link } from 'react-router-dom';

const Menu = () => {
  return (
    <div className='ui secondary  menu'>
      <Link className='item' to='/'> Tweetler </Link>
      <Link className='item' to='/myTweets'> Benim Tweetlerim </Link>
      <div className='right menu'>
        <Link className='item' to='/login'> Giriş yap </Link>
      </div>
    </div>
  )
}

export default Menu;
