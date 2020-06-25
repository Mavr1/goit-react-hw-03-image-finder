import React, { Component } from 'react';
import shortid from 'shortid';
import Loader from 'react-loader-spinner';
import Searchbar from './components/searchbar/Searchbar';
import { pixaGet } from './services/apiServices';
import ImageGallery from './components/imageGallery/ImageGallery';
import ImageGalleryItem from './components/imageGalleryItem/ImageGalleryItem';
import './App.css';
import './styles.css';
import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css';
import Modal from './components/modal/Modal';

class App extends Component {
  state = {
    query: 'ocean',
    pageNumber: 1,
    images: [],
    loading: false,
    largeUrl: null,
    alt: null,
  };

  componentDidMount() {
    this.setState({ loading: true });
    this.searchQuery('ocean', 1);
  }

  componentDidUpdate(prevProps, prevState) {
    const { query, pageNumber } = this.state;
    if (prevState.query !== query) {
      this.setState({ loading: true });
      this.searchQuery();
      return;
    }
    if (prevState.pageNumber !== pageNumber) {
      this.setState({ loading: true });
      this.loadMore();
      return;
    }
  }

  searchQuery = async () => {
    const response = await pixaGet(this.state.query, 1);
    const {
      data: { hits: images },
    } = response;
    this.setState({ loading: false, images: images });
  };

  loadMore = async () => {
    const response = await pixaGet(this.state.query, this.state.pageNumber);
    const {
      data: { hits: images },
    } = response;
    this.setState((prevState) => ({
      loading: false,
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

  openModal = (e) => {
    this.setState({ largeUrl: e.target.dataset.large, alt: e.target.alt });
  };

  closeModal = (e) => {
    e.target.dataset.type === 'overlay' && this.setState({ largeUrl: null });
  };

  render() {
    return (
      <div className="App">
        {this.state.largeUrl && (
          <Modal
            src={this.state.largeUrl}
            alt={this.state.alt}
            handleCloseModal={this.closeModal}
          />
        )}
        <Searchbar handleSubmit={this.getQuery} />
        {this.state.images.length > 0 && (
          <ImageGallery
            handleClick={this.increasePage}
            isLoading={this.state.loading}
          >
            {this.state.loading ? (
              <Loader
                className="loader"
                type="Puff"
                color="#00BFFF"
                height={100}
                width={100}
                timeout={3000}
              />
            ) : (
              this.state.images.map((item) => (
                <ImageGalleryItem
                  key={shortid.generate()}
                  src={item.webformatURL}
                  alt={item.tags}
                  srcLarge={item.largeImageURL}
                  handleImageClick={this.openModal}
                />
              ))
            )}
          </ImageGallery>
        )}
      </div>
    );
  }
}

export default App;
