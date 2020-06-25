import React from 'react';

const ImageGalleryItem = ({ src, alt, srcLarge, handleImageClick }) => (
  <li className="ImageGalleryItem" onClick={handleImageClick}>
    <img
      src={src}
      alt={alt}
      data-large={srcLarge}
      className="ImageGalleryItem-image"
    />
  </li>
);

export default ImageGalleryItem;
