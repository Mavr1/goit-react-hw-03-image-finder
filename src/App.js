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

  componentDidUpdate(prevProps, prevState) {
    const { query, pageNumber } = this.state;
    if (prevState.query !== query) {
      this.searchQuery(query, pageNumber);
      return;
    }
    if (prevState.pageNumber !== pageNumber) {
      this.loadMore(query, pageNumber);
      return;
    }
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
      pageNumber
    );
    const {
      data: { hits: images },
    } = response;
    this.setState((prevState) => ({
      // pageNumber: prevState.pageNumber,
      images: [...prevState.images, ...images],
    }));
    window.scrollTo({
      top: document.documentElement.scrollHeight,
      behavior: 'smooth',
    });
  };

  getQuery = (query) => {
    this.setState({ query });
  };

  increasePage = () => {
    this.setState({ pageNumber: this.state.pageNumber + 1 });
  };

  render() {
    // const { query, pageNumber } = this.state;
    return (
      <div className="App">
        <Searchbar handleSubmit={this.getQuery} />
        {this.state.images.length > 0 && (
          <ImageGallery
            handleClick={this.increasePage}
            // query={query}
            // pageNumber={pageNumber}
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
