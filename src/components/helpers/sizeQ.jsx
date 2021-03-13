import React, { useState, useEffect } from 'react';

// make this dropDown universal if we need to use for multiple features
const DropDown = (focus) => {
  // PROPS
  const { style } = focus; // each style has a set of skus
  const { skus } = style; // skus for current style
  // configure skus for easier use
  let options = [];
  if (skus) { options = Object.values(skus); }
  // TODO: limit the available q to 15 if more in stock.
  const maxLength = 15;


  // TODO: ADDTOCART move here and add interaction with size and style
  // STATES
  const [state, setState] = useState('Select Size');
  const [sizes, setSizes] = useState([]);
  const [currentSize, setCurrentSize] = useState('-');
  const [show, setShow] = useState(false);

  // HANDLERS for changes
  // oon size seletion, update size and set q to 1
  const set = (event) => {
    setShow(false);
    setState(event);
    setCurrentSize(1);
  };
  // on size selection, update q to selected value
  const setSize = (event) => {
    setCurrentSize(event);
  };
  // TODO: add logic for clicking with various size and q states
  // add to cart functionality
  const reset = () => {
    if (state === 'Select Size') { setShow(true); }
    setState('Select Size');
    setCurrentSize('-');
  }


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

  // reset on style change
  useEffect(() => {
    setState('Select Size');
    setSizes([]);
    setCurrentSize('-');
    setShow(false);
  }, [focus.style]);

  console.log({show})
  // DOM
  return (
    <div>
      <div className="columns">
        <div className="column size">
          {show &&
            <span>Please Select a Size</span>
          }
          <select
            id="size"
            value={state}
            onChange={(e) => set(e.target.value)}
          >
            <option id="open">{state}</option>
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
            <option>{currentSize}</option>
            {sizes.map((index) =>
              <option key={index.toString()} value={index}>{index}</option>)}
          </select>
        </div>
        <div className="column cart">
          <button
            type="button"
            onClick={(e) => reset(e)}
            >
            Add to Cart +
          </button>
        </div>
      </div>
    </div>
  );
};

export default DropDown;
