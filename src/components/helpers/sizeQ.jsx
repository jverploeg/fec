import React, { useState, useEffect } from 'react';

// make this dropDown universal if we need to use for multiple features
const DropDown = (props) => {
  // props will be a set of {quantity: num, size: xs-xl}
  const [state, setState] = useState('');
  const [size, setSizes] = useState('-');
  const { style } = props;
  console.log({style});
  const { skus } = style;
  console.log({skus});
  let options = [];
  if (skus) { options = Object.values(skus); }

  let showValue = '';
  const maxLength = 15;

  // useEffect(() => {
  //   setState()
  // })


  const set = (event) => {
    console.log(event);
    showValue = event;
  };
  // const [size, SizeDropdown] = DropDown('Select Size', '', '', sizes);
  // (name, label, defaultState, options)
  // const [state, setState] = useState(defaultState);
  return (
    <div>
      <div className="column size">
        <select
          id="size"
          value={state}
          onChange={(e) => setState(e.target.value)}
          // onChange={(e) => set(e.target.value)}
          // disabled={!sets.length}
        >
          <option>Select Size</option>
          {!!options && options.map((item) =>
            <option key={item.size} value={item.size}>{item.size}</option>)}
        </select>
      </div>
      <div className="column quantity">
        <select
          id=""
          value={showValue}
          onChange={(e) => set(e.target.value)}
          // disabled={!sets.length}
        >
          <option>Select Size</option>
          {!!options && options.map((item) =>
            <option key={item.size} value={item.size}>{item.size}</option>)}
          </select>
      </div>
    </div>
  );
};

export default DropDown;
