import { LOGIN } from '../actions';

export default (state = {}, action) => {
  if (action.type === LOGIN) {
    return action.payload;
  }
  return state;
}
