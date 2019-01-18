import { combineReducers } from 'redux';
import books from './books.json';

//Reducers
const bookListReducer = (oldBookList = books, action) => {
  if (action.type === 'ADD_BOOK') {
    //Kitap listesine ekle
    return [ ...oldBookList, action.payload ];
  } else if (action.type === 'DELETE_BOOK') {
    //Kitap listesinden cikar
    return oldBookList.filter(oldBook => oldBook.title !== action.payload.title);
  }
  return oldBookList;
}

const selectedBookReducer = (oldSelectedBook = {}, action) => {
  if (action.type === 'SELECT_BOOK') {
    //kitapSecme islemnini yap
    return action.payload;
  } else if (action.type === 'DESELECT_BOOK') {
    //kitap secimini kaldir
    return {};
  } else if (action.type === 'DELETE_BOOK') {
    return oldSelectedBook.isbn === action.payload.isbn ? {} : oldSelectedBook;
  }
  return oldSelectedBook;
}

export default combineReducers({
  bookList: bookListReducer,
  selectedBook: selectedBookReducer
});
