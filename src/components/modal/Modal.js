import React, { Component } from 'react';

class Modal extends Component {
  closeModal = (e) => this.props.handleCloseModal(e);

  componentDidMount() {
    window.addEventListener('keydown', this.closeModal);
  }

  componentWillUnmount() {
    window.removeEventListener('keydown', this.closeModal);
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
