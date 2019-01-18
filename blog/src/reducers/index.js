import { combineReducers } from 'redux';
import PostListReducer from './post_list_reducer';
import UserListReducer from './user_list_reducer';

export default combineReducers({
  postList: PostListReducer,
  userList: UserListReducer
});
