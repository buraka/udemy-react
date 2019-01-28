import firebase from 'firebase/app';
import 'firebase/auth';
import history from '../history';

export const LOGIN = 'LOGIN';
export const LOGGED_IN = 'LOGGED_IN';
export const NOT_LOGGED_IN = 'NOT_LOGGED_IN';
export const LOGOUT = 'LOGOUT';

const loginSuccess = (dispatch, response) => {
  console.log(response);
  history.push('/')
  dispatch({ type: LOGIN, payload: response.user });
}

export const login = (email, password) => {
  return (dispatch) => {
    //firebase sorgusu
    firebase.auth().signInWithEmailAndPassword(email, password)
      .then((response) => {
        loginSuccess(dispatch, response);
      })
      .catch((err) => {
        console.log(err);
        firebase.auth().createUserWithEmailAndPassword(email, password)
          .then((response) => {
            loginSuccess(dispatch, response);
          })
      })
  }
};

export const isLoggedIn = () => {
  return dispatch => {
    firebase.auth().onAuthStateChanged(user => {
      console.log(user);
      if (user) {
        history.push('/');
        dispatch({
          type: LOGGED_IN,
          payload: user
        })
      } else {
        dispatch({ type: NOT_LOGGED_IN })
      }
    });
  };
};

export const logout = () => {
  return dispatch => {
    firebase.auth().signOut().then(() => {
      dispatch({ type: LOGOUT })
    });
  }
}
