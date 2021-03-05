import React, { useState } from 'react';
// helpers
import ImageMap from '../helpers/imageMap';

// sample data
// const data = require('./sampleData');

function Image(focus) { // focus.product
  // states
  // thumbs
  const thumbs = focus.product.results[0].photos; // photo array
  const current = thumbs[0].url;
  const thumb = thumbs[0].thumbnail_url;
  const [photos, UsePhoto] = ImageMap(thumbs, thumbs[0]);
  // const [something, setSomething] = useState(0);

  return (
    <UsePhoto />
  );
}

/* <span className="tag is-primary is-pulled-left">Image label on overlay</span> */
/* <figure className="image is-4by3">
<img src="https://bulma.io/images/placeholders/1280x960.png" alt="" />
</figure> */
/* <React.Fragment>
    <img
      menu="menu"
      className="tile is-child"
      src="https://bulma.io/images/placeholders/640x480.png" alt=""
    />
  </React.Fragment> */

export default Image;
/* <div className="tile is-parent is-vertical is-pulled-left">
<div className="tile is-child box">
  <span>1</span>
</div>
<div className="tile is-child box">
  <span>2</span>
</div>
<div className="tile is-child box">
  <span>3</span>
</div>
<div className="tile is-child box">
  <span>4</span>
</div>
<div className="tile is-child box">
  <span>5</span>
</div>
</div> */
