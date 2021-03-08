/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React, { useState } from 'react';

const Styles2 = (options, current) => {
  const [state, setState] = useState(current);

  const change = (styles) => {
    const newFocus = styles.item;
    setState(newFocus);
  };

  const gridMaker = () => (
    <div className="columns">
      {options.map((item, key) => (
        <div className="column">
          <figure className="image is-64x64" value={item} index={key} onClick={() => change({ item })}>
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
