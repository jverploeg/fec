/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React, { useState, useEffect } from 'react';

const StylesGrid = (options, {passBack}) => {
  // PROPS
  const { styles } = options;
  const { changePhoto } = options;

  // STATES
  // currently selected style to be passed back up
  const [current, setCurrent] = useState({});
  // styles state to change the style options if product is changed
  const [styleSet, setStyle] = useState([]);

  // EFFECT rerender on prop change
  useEffect(() => {
    setStyle(styles);
  }, [options.styles]);

  // EVENT HANDLERS
  const handleChange = (focus) => {
    const newFocus = focus.item;
    console.log({newFocus});
    setCurrent(newFocus);
    options.onChange(newFocus);
  };
  // useEffect(() => {
  //   change();
  // });


  return (
    <div className="columns">
      {styles.map((item) => (
        <div className="column" key={item.style_id}>
          <figure className="image is-64x64" key={item.style_id} value={item} onClick={() => handleChange({ item })}>
            <img className="is-rounded is-focused" src={item.photos[0].thumbnail_url} alt="" />
            <strong>{item.name}</strong>
          </figure>
        </div>
      ))}
    </div>
  );
};

export default StylesGrid;
