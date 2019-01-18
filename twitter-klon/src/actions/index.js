import firebase from 'firebase/app';
import 'firebase/auth';

export const LOGIN = 'LOGIN';

export const login = (email, password) => {

  return (dispatch) => {
    //firebase sorgusu
    firebase.auth().signInWithEmailAndPassword(email, password)
      .then((response) => {
        console.log(response);
        dispatch({ type: LOGIN, payload: response.user });
      })
      .catch((err) => {
        console.log(err);
        firebase.auth().createUserWithEmailAndPassword(email, password)
          .then((response) => {
            console.log(response);
            dispatch({ type: LOGIN, payload: response.user });
          })
      })
  }
}
