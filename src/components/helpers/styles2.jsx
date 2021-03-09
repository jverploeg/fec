/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React, { useState, useEffect } from 'react';

const Styles2 = (options, current) => {
  const [state, setState] = useState(current);

  const change = (styles) => {
    const newFocus = styles.item;
    setState(newFocus);
  };
  // console.log(options);
  // useEffect(() => {
  //   // const change = (styles) => {
  //   //   const newFocus = styles.item;
  //   //   setState(newFocus);
  //   // };
  //   change();
  // });

  const gridMaker = () => (
    <div className="columns">
      {options.map((item) => (
        <div className="column" key={item.style_id}>
          <figure className="image is-64x64" key={item.style_id} value={item} onClick={() => change({ item })}>
            <img className="is-rounded is-focused" src={item.photos[0].thumbnail_url} alt="" />
            <strong>{item.name}</strong>
          </figure>
        </div>
      ))}
    </div>
  );
  return [state, gridMaker, setState];
};

export default Styles2;
