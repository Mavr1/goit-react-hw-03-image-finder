import React, { Component } from 'react';
import shortid from 'shortid';
import Searchbar from './components/searchbar/Searchbar';
import { pixaServices } from './services/apiServices';
import ImageGallery from './components/imageGallery/ImageGallery';
import ImageGalleryItem from './components/imageGalleryItem/ImageGalleryItem';
import './App.css';
import './styles.css';

class App extends Component {
  state = { query: '', pageNumber: 1, images: [] };

  componentDidMount() {
    this.searchQuery('ocean', 1);
  }

  searchQuery = async (query, pageNumber) => {
    const response = await pixaServices.get.call(
      pixaServices,
      query,
      pageNumber
    );
    const {
      data: { hits: images },
    } = response;
    this.setState({ images, query: query, pageNumber: 1 });
  };

  loadMore = async (query, pageNumber) => {
    const response = await pixaServices.get.call(
      pixaServices,
      query,
      pageNumber + 1
    );
    const {
      data: { hits: images },
    } = response;
    this.setState((prevState) => ({
      pageNumber: prevState.pageNumber + 1,
      images: [...prevState.images, ...images],
    }));
    window.scrollTo({
      top: document.documentElement.scrollHeight,
      behavior: 'smooth',
    });
  };

  render() {
    const { query, pageNumber } = this.state;
    return (
      <div className="App">
        <Searchbar handleSubmit={this.searchQuery} pageNumber={pageNumber} />
        {this.state.images.length > 0 && (
          <ImageGallery
            handleClick={this.loadMore}
            query={query}
            pageNumber={pageNumber}
          >
            {this.state.images.map((item) => (
              <ImageGalleryItem
                key={shortid.generate()}
                src={item.webformatURL}
                alt={item.tags}
              />
            ))}
          </ImageGallery>
        )}
      </div>
    );
  }
}

export default App;
