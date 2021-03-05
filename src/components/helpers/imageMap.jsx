import React, { useState } from 'react';

const ImageMap = (options, current) => {
  const [state, setState] = useState(current);

  const imageMaker = () => (
    <div className="tile is-parent  is-vertical is-pulled-left">
      <div
        className="tile is-child"
      >
        {options.map((item) => (
          <figure className="image is-64x64" key={item.thumbnail_url}>
            <img src={item.thumbnail_url} alt="" />
          </figure>
        ))}
      </div>
    </div>
  );
  return [state, imageMaker, setState];
};

export default ImageMap;
