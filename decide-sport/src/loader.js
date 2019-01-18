import React from 'react';
import './loader.css';

const Loader = ({ text }) => {
  return (
    <div className="loader-container ui segment">
      <div className="ui active inverted dimmer">
        <div className="ui text loader">{text}</div>
      </div>
      <p></p>
    </div>
  )
}

Loader.defaultProps = {
  text: 'Yükleniyor...'
};

export default Loader;
