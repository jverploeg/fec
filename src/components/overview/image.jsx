import React, { useState } from 'react';
// helpers
import ImageMap from '../helpers/imageMap';

function Image(focus) { // focus.pics
  const { pics } = focus;
  const thumbs = pics.photos;

  const [photo, UsePhoto] = ImageMap(thumbs, thumbs[0]);

  return (
    <UsePhoto />
  );
}

export default Image;
