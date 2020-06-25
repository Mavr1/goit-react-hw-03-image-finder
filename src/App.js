import React, { Component } from 'react';
import shortid from 'shortid';
import Loader from 'react-loader-spinner';
import Searchbar from './components/searchbar/Searchbar';
import { pixaServices } from './services/apiServices';
import ImageGallery from './components/imageGallery/ImageGallery';
import ImageGalleryItem from './components/imageGalleryItem/ImageGalleryItem';
import './App.css';
import './styles.css';
import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css';
import Modal from './components/modal/Modal';

class App extends Component {
  state = {
    query: '',
    pageNumber: 1,
    images: [],
    loading: false,
    largeUrl: null,
  };

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
    this.setState({ loading: true });
    const response = await pixaServices.get.call(
      pixaServices,
      query,
      pageNumber
    );
    const {
      data: { hits: images },
    } = response;
    this.setState({ images, query: query, pageNumber: 1, loading: false });
  };

  loadMore = async (query, pageNumber) => {
    this.setState({ loading: true });
    const response = await pixaServices.get.call(
      pixaServices,
      query,
      pageNumber
    );
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
    this.setState({ largeUrl: e.target.dataset.large });
  };

  render() {
    // const { query, pageNumber } = this.state;
    return (
      <div className="App">
        {this.state.largeUrl && <Modal src={this.state.largeUrl} />}
        <Searchbar handleSubmit={this.getQuery} />
        {this.state.images.length > 0 && (
          <ImageGallery
            handleClick={this.increasePage}
            isLoading={this.state.loading}
            // query={query}
            // pageNumber={pageNumber}
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
