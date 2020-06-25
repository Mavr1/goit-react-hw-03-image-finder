import React from 'react';

const ImageGalleryItem = ({ src, alt }) => (
  <li className="ImageGalleryItem">
    <img src={src} alt={alt} className="ImageGalleryItem-image" />
  </li>
);

export default ImageGalleryItem;
