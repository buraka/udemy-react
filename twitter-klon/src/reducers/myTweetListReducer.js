import { FETCH_MY_TWEETS } from '../actions';

export default (state = [], action) => {
  if (action.type === FETCH_MY_TWEETS) {
    return action.payload;
  }
  return state;
}
