import React, { Component } from 'react';
import './App.css';
import Searchbar from './components/searchbar/Searchbar';
import { pixaServices } from './services/apiServices';

class App extends Component {
  state = { pageNumber: 1 };

  render() {
    return (
      <div className="container">
        <Searchbar
          handleSubmit={pixaServices.get.bind(pixaServices)}
          pageNumber={this.state.pageNumber}
        />
      </div>
    );
  }
}

export default App;
