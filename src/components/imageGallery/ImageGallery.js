import React from 'react';
import Button from '../button/Button';

const ImageGallery = ({ children, handleClick, isLoading }) => (
  <>
    <ul className="ImageGallery">{children}</ul>
    {!isLoading && (
      <Button
        buttonText="Load More"
        clsnButton="Gallery-button"
        handleClick={handleClick}
      />
    )}
  </>
);

export default ImageGallery;
