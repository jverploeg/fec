import React, { useState, useEffect } from 'react';
// helpers
import ImageMap from '../helpers/imageMap';
import ImageModal from '../helpers/imageModal';

function Image(focus) { // focus.pics
  const { pics } = focus; // es6 way of saying pics = focus.pics
  const { photos } = pics;

  const [photo, setPhoto] = ImageModal(photos, photos[0]);

  return (
    <setPhoto />
  );
}

export default Image;
