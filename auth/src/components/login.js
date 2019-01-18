import React, {Component} from 'react';
import './login.css';
class Login extends Component {
  render() {
    return (
      <div className='login-container'>
        <div className='login-wrapper'>
          <div className='ui input'>
            <input type='text' placeholder='Isim' />
          </div>
          <div className='ui input'>
            <input type='password' placeholder='Sifreniz' />
          </div>
          <button class="ui button" type="submit">Giris yap</button>
        </div>
      </div>
    )
  }
}

export default Login;
