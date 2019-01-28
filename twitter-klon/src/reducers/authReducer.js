import { LOGIN, LOGGED_IN, LOGOUT } from '../actions';

const INITIAL_STATE = {
  email: '',
  isLoggedIn: false
};

export default (state = INITIAL_STATE, action) => {
  if (action.type === LOGIN || action.type === LOGGED_IN) {
    return {
      email: action.payload.email,
      isLoggedIn: true
    };
  } else if (action.type === LOGOUT) {
    return INITIAL_STATE;
  }
  return state;
}
