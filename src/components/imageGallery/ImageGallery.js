import React from 'react';
import Button from '../button/Button';

const ImageGallery = ({ children, handleClick }) => (
  <>
    <ul className="ImageGallery">{children}</ul>
    <Button
      buttonText="Load More"
      clsnButton="Gallery-button"
      handleClick={handleClick}
    />
  </>
);

export default ImageGallery;
