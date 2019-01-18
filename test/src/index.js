//import larimizi yazacagiz.
import React from 'react';
import ReactDOM from 'react-dom';

const getTexts = () => {
  return {
    button: 'Onay',
    name: 'Isminiz: '
  }
}

//Component'i yarat -> React
const App = () => {
  // const buttonText = 'Onay Butonu';
  // const nameText = 'Isminiz: ';
  const style = {
    backgroundColor: 'blue',
    color: '#fff'
  };

  return (
    <div>
      <label htmlFor='name' > {getTexts().name} </label>
      <input className='input' type='input' id='name' />
      <button style={style}> {getTexts().button} </button>
    </div>
  )
}

//Component al ve goster -> ReactDOM
ReactDOM.render(
  <App />,
  document.querySelector('#root')
)
