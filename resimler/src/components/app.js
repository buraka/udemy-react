import React, { Component } from 'react';
import SearchBar from './searchBar/searchBar';
import ImageList from './image/imageList';
import axios from 'axios';
import './app.css';

class App extends Component {

  state = {
    images: []
  }

  onSearchImage = async (search) => {
    const result = await axios.get('https://api.unsplash.com/search/photos', {
      params: {
        query: search
      },
      headers: {
        Authorization: 'Client-ID 27208c094ed539adbb0b2b7ce4097bdba2d2d5c1bcd9794b1562c79dbbb96294'
      }
    })
    this.setState({
      images: result.data.results
    });
  }

  render() {
    return (
      <div className='app-container'>
        <SearchBar onSearchImage={this.onSearchImage}/>
        <ImageList images={this.state.images} />
      </div>
    )
  }
};

export default App;
