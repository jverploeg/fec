import React from 'react';

class Image extends React.Component {
  // stuff and states
  state = {options: 1}

  render() {
    return (
      <div className="card">
        <div className="card-image">
          <img src="https://bulma.io/images/placeholders/640x480.png" alt="" />
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
    )
  }
};

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
