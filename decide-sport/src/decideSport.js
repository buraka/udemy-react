import React, { Component } from 'react';
import './decideSport.css';
import Loader from './loader';

class DecideSport extends Component {
  constructor(props) {
    super(props);

    this.state = {
      latitude: null,
      error: ''
    };

    window.navigator.geolocation.getCurrentPosition(
      (position) => {
        console.log(position);
        this.setState({
          latitude: position.coords.latitude
        });
      },
      (err) => {
        console.log(err);
        this.setState({
          error: 'Kullanici lokasyon bilgisini paylasmadi.'
        });
      }
    );
  }

  componentDidMount() {
    console.log('componentDidMount');
  }

  componentDidUpdate() {
    console.log('componentDidUpdate');
  }

  componentWillUnMount() {
    this.setState({
      latitude: 0
    });
  }

  decideSport(lat) {
    const currentMonth = new Date().getMonth();
    const summer = {
      text: 'Yuzme zamani',
      iconName: 'sun'
    };
    const winter = {
      text: 'Snowboard\'a gidebilirsin.',
      iconName: 'snowflake'
    };

    if (lat < 0) {
      //Guney yarimkure
      return currentMonth > 3 && currentMonth < 8 ? winter : summer;
    } else {
      //kuzey yarim kure
      return currentMonth > 8 || currentMonth < 3 ? winter : summer
    }
  }

  render() {
    const { latitude, error } = this.state;

    if (latitude && !error) {
      const sport = this.decideSport(latitude);
      return (
        <div className={`${sport.iconName}-wrapper decide-sport-container`}>
          <h2 className="ui header">
            <i className={`${sport.iconName} outline icon`}></i>
            <div className="content">
              {sport.text}
            </div>
          </h2>
        </div>
      )
    } else if (!latitude && error) {
      return (
        <div>
          Hata: {error}
        </div>
      )
    }

    return (
      <Loader text='Lokasyon bilgisini paylaşınız...' />
    )
  }
}

export default DecideSport;
