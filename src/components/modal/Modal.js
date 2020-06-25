import React from 'react';

const Modal = ({ src, alt, handleCloseModal }) => (
  <div className="Overlay">
    <div className="Modal">
      <img src={src} alt={alt} />
    </div>
  </div>
);

export default Modal;
