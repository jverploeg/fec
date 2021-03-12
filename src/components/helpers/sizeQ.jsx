import React, { useState, useEffect } from 'react';

// make this dropDown universal if we need to use for multiple features
const DropDown = (props) => {
  // props will be a set of {quantity: num, size: xs-xl}
  const [state, setState] = useState('');
  const [sizes, setSizes] = useState([]);
  const [currentSize, setCurrentSize] = useState('-');
  const { style } = props;
  // console.log({style});
  const { skus } = style;
  // console.log({skus});
  let options = [];
  if (skus) { options = Object.values(skus); }

  const maxLength = 15;

  // const changeSize = () => {
  //   options.forEach((item) => {
  //     console.log(item.size);
  //     console.log({state});
  //     if (item.size === state) { console.log(item.quantity); }
  //   });
  // };
  // console.log({state})
  // useEffect(() => {
  //   setState(state);
  // }, [set]);

  // useEffect(() => {
  //   let newSize = changeSize();
  //   console.log({newSize});
  // }, [state]);
  // const handleChange= (event) => {
  //   changePhoto(event);
  //   useEffect(() => {
  //     setCurrentStyle(event);
  //   });
  // };
  const set = (event) => {
    setState(event);
    setCurrentSize(1);
  };
  const setSize = (event) => {
    setCurrentSize(event);
  };

  useEffect(() => {
    let newSize = 0;
    options.forEach((item) => {
      if (item.size === state) { newSize = (item.quantity); }
    });
    //console.log(newSize);
    let arr = [...Array(newSize).keys()];
    arr.shift();
    setSizes(arr);
  }, [state]);
  // console.log([...Array(10).keys()]);
  // console.log({options2});
  // console.log({sizes});

  // const [size, SizeDropdown] = DropDown('Select Size', '', '', sizes);
  // (name, label, defaultState, options)
  // const [state, setState] = useState(defaultState);
  return (
    <div>
      <div className="column size">
        <select
          id="size"
          value={state}
          // onChange={(e) => setState(e.target.value)}
          onChange={(e) => set(e.target.value)}
          // disabled={!sets.length}
        >
          <option>Select Size</option>
          {!!options && options.map((item) =>
            <option key={item.id} value={item.size}>{item.size}</option>)}
        </select>
      </div>
      <div className="column quantity">
        <select
          id="quantity"
          // value={(sizes === 0) ? '-' : {currentSize} }
          value={currentSize}
          onChange={(e) => setSize(e.target.value)}
          // disabled={!sets.length}
        >
          <option> - </option>
          {sizes.map((index) =>
            <option key={index.toString()} value={index}>{index}</option>)}
        </select>
      </div>
    </div>
  );
};

export default DropDown;
