import React, { useState } from 'react';

function Image() {
  // stuff and states
  const [something, setSomething] = useState(0);

  return (
    <div className="card">
      <div className="card-image">
        <figure className="image is-4by3">
          <img src="https://bulma.io/images/placeholders/1280x960.png" alt="" />
        </figure>
      </div>
      <div className="card-content is-overlay">
        <div className="tile is-parent is-vertical is-pulled-left">
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
        </div>
      </div>
    </div>
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
