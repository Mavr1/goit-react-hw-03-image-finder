import React, { Component } from 'react';

class Modal extends Component {
  componentDidMount() {
    window.addEventListener('keydown', (e) => this.props.handleCloseModal(e));
  }

  componentWillUnmount() {
    window.removeEventListener('keydown', (e) =>
      this.props.handleCloseModal(e)
    );
  }

  render() {
    return (
      <div
        className="Overlay"
        data-type="overlay"
        onClick={this.props.handleCloseModal}
      >
        <div className="Modal">
          <img src={this.props.src} alt={this.props.alt} />
        </div>
      </div>
    );
  }
}

export default Modal;
