import React, { useState } from 'react';

function Details() {
  // stuff and states
  const [something, setSomething] = useState(0);
  // state = {
  //   name: '',
  //   price: 0,
  //   style: []
  // }
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
            <button type="button" className="button is-rounded is-link">X</button>
          </div>
          <div className="column">
            <button type="button" className="button is-rounded is-link" />
          </div>
          <div className="column">
            <button type="button" className="button is-rounded is-link" />
          </div>
          <div className="column">
            <button type="button" className="button is-rounded is-link" />
          </div>
        </div>
        <div className="columns">
          <div className="column">
            <button type="button" className="button is-rounded is-link" />
          </div>
          <div className="column">
            <button type="button" className="button is-rounded is-link" />
          </div>
          <div className="column">
            <button type="button" className="button is-rounded is-link" />
          </div>
          <div className="column">
            <button type="button" className="button is-rounded is-link" />
          </div>
        </div>
      </div>
      <div className="columns">
        <div className="column is-two-thirds size">
          <div className="dropdown">
            <div className="dropdown-trigger">
              <button type="button" className="button">
                <span>Select Size</span>
              </button>
            </div>
            <div className="dropdown-menu">
              <div className="dropdown-content">
                <div className="dropdown-content">
                  <li className="dropdown-item">
                    XS
                  </li>
                  <li className="dropdown-item">
                    S
                  </li>
                  <li className="dropdown-item">
                    M
                  </li>
                  <li className="dropdown-item">
                    L
                  </li>
                  <li className="dropdown-item">
                    XL
                  </li>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="column quantity">
          <button type="button">Quantity</button>
        </div>
      </div>

      <div className="columns">
        <div className="column is-three-quarters cart">
          <button type="button">Add to Bag +</button>
        </div>
        <div className="column favorite">
          <button type="button">Star</button>
        </div>
      </div>
    </div>
  );
}

export default Details;
