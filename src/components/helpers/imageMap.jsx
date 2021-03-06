/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React, { useState, useEffect } from 'react';

const ImageMap = (options, current) => {
  console.log({ current });
  const [state, setState] = useState(current);

  // change current image focus on prop change
  useEffect(() => {
    setState(current);
  }, [current]);

  // click handler to change the view/current
  const change = (e) => {
    e.persist();
    // SyntheticBaseEvent
    const thumb = e.target.src;
    const u = e.target.alt;
    const newFocus = {
      thumbnail_url: thumb,
      url: u,
    };
    setState(newFocus);
  };

  const imageMaker = () => (
    <div className="card">
      <div className="card-image">
        <figure className="image is-256x256">
          <img src={state.url} alt={state.thumbnail_url} />
        </figure>
      </div>
      <div className="card-content is-overlay">
        <div className="tile is-parent  is-vertical is-pulled-left">
          <div className="tile is-child">
            {options.map((item) => (
              <figure className="image is-64x64" key={item.thumbnail_url} onClick={(e) => change(e)}>
                <img src={item.thumbnail_url} alt={item.url} />
              </figure>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
  return [state, imageMaker, setState];
};

export default ImageMap;
