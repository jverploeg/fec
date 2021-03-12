import React, { useState, useEffect } from 'react';

// make this dropDown universal if we need to use for multiple features
const DropDown = (props) => {
  // PROPS
  const { style } = props; // each style has a set of skus
  const { skus } = style; // skus for current style
  // configure skus for easier use
  let options = [];
  if (skus) { options = Object.values(skus); }
  // TODO: limit the available q to 15 if more in stock.
  const maxLength = 15;

  // TODO: ADDTOCART move here and add interaction with size and style
  // STATES
  const [state, setState] = useState('');
  const [sizes, setSizes] = useState([]);
  const [currentSize, setCurrentSize] = useState('-');


  // HANDLERS for changes
  // oon size seletion, update size and set q to 1
  const set = (event) => {
    setState(event);
    setCurrentSize(1);
  };
  // on size selection, update q to selected value
  const setSize = (event) => {
    setCurrentSize(event);
  };


  // EFFECTS to rerender
  useEffect(() => {
    let newSize = 0;
    options.forEach((item) => {
      if (item.size === state) { newSize = (item.quantity); }
    });
    let arr = [...Array(newSize).keys()]; // create array given length
    arr.shift(); // remove 0
    setSizes(arr);
  }, [state]);

  // DOM
  return (
    <div>
      <div className="columns">
        <div className="column size">
          <select
            id="size"
            value={state}
            onChange={(e) => set(e.target.value)}
          >
            <option>Select Size</option>
            {!!options && options.map((item) =>
              <option key={item.id} value={item.size}>{item.size}</option>)}
          </select>
        </div>

        <div className="column quantity">
          <select
            id="quantity"
            value={currentSize}
            onChange={(e) => setSize(e.target.value)}
            // disabled={!sizes.length}
          >
            <option> - </option>
            {sizes.map((index) =>
              <option key={index.toString()} value={index}>{index}</option>)}
          </select>
        </div>
        <div className="column cart">
          <button type="button">Add to Cart +</button>
        </div>
      </div>
    </div>
  );
};

export default DropDown;
