import React from 'react';
import data from './sampledata';

class Details extends React.Component {
  // stuff and states
  state = {
    name: '',
    price: 0,
    style: []
  }

  render() {
    return (
      <div>
        <div className="column star">
          Ratings and Reviews
        </div>
        <div className="column details">
          Product Name
        </div>
        <div className="column price">
          Price
        </div>
        <div className="column styles">
          Style
          <div className="columns">
            <div className="column">
              <button className="button is-rounded is-link">X</button>
            </div>
            <div className="column">
              <button className="button is-rounded is-link" />
            </div>
            <div className="column">
              <button className="button is-rounded is-link" />
            </div>
            <div className="column">
              <button className="button is-rounded is-link" />
            </div>
          </div>
          <div className="columns">
            <div className="column">
              <button className="button is-rounded is-link" />
            </div>
            <div className="column">
              <button className="button is-rounded is-link" />
            </div>
            <div className="column">
              <button className="button is-rounded is-link" />
            </div>
            <div className="column">
              <button className="button is-rounded is-link" />
            </div>
          </div>
        </div>
        <div className="columns">
          <div className="column is-two-thirds size">
            <div className="dropdown">
              <div className="dropdown-trigger">
                <button className="button">
                  <span>Select Size</span>
                </button>
              </div>
              <div className="dropdown-menu">
                <div className="dropdown-content">
                  <div className="dropdown-content">
                    <a className="dropdown-item">
                      XS
                    </a>
                    <a className="dropdown-item">
                      S
                    </a>
                    <a className="dropdown-item">
                      M
                    </a>
                    <a className="dropdown-item">
                      L
                    </a>
                    <a className="dropdown-item">
                      XL
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="column quantity">
            <button>Quantity</button>
          </div>
        </div>

        <div className="columns">
          <div className="column is-three-quarters cart">
            <button>Add to Bag +</button>
          </div>
          <div className="column favorite">
            <button>Star</button>
          </div>
        </div>
      </div>
    )
  }
};

export default Details;