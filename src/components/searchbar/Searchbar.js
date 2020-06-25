import React, { Component } from 'react';
import Button from '../button/Button';

class Searchbar extends Component {
  state = { input: '' };

  handleInput = (e) => {
    this.setState({ input: e.target.value });
  };

  render() {
    const onSubmit = (e) => {
      e.preventDefault();
      this.props.handleSubmit(this.state.input);
    };

    return (
      <header className="Searchbar">
        <form className="SearchForm" onSubmit={onSubmit}>
          <Button
            type="submit"
            buttonText="Search"
            clsnButton="SearchForm-button"
            clsnButtonName="SearchForm-button-label"
          />
          <input
            className="SearchForm-input"
            type="text"
            autoComplete="off"
            autoFocus
            placeholder="Search images and photos"
            name="searchQuery"
            value={this.state.query}
            onChange={this.handleInput}
          />
        </form>
      </header>
    );
  }
}

export default Searchbar;
