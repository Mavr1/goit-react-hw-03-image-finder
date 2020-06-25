import React from 'react';

const Modal = ({ src, alt, handleCloseModal }) => (
  <div className="Overlay" data-type="overlay" onClick={handleCloseModal}>
    <div className="Modal">
      <img src={src} alt={alt} />
    </div>
  </div>
);

export default Modal;
