import { FETCH_ALL_TWEETS } from '../actions';

export default (state = [], action) => {
  if (action.type === FETCH_ALL_TWEETS) {
    return action.payload;
  }
  return state;
}
