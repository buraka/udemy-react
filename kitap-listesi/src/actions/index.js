//Aksiyonlar
//Kitap ekleme
export const addBook = ({
  isbn, title, subtitle, description, author, pages
}) => {
  return { //Aksiyon objesi
    type: 'ADD_BOOK',
    payload: {
      isbn, title, subtitle, description, author, pages
    }
  }
}

//kitap silme
export const deleteBook = (book) => {
  return {
    type: 'DELETE_BOOK',
    payload: book
  }
}

//kitap secme
export const selectBook = (book) => {
  return {
    type: 'SELECT_BOOK',
    payload: book
  }
}

//kitap secmeme
export const deselectBook = () => {
  return {
    type: 'DESELECT_BOOK'
  }
}
