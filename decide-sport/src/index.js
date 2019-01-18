import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import DecideSport from './decideSport';

class App extends Component {
  render() {
    return (
      <div>
        <DecideSport />
      </div>
    )
  }
}

ReactDOM.render(
  <App />,
  document.querySelector('#root')
);
