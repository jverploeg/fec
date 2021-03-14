import React, { useState } from 'react';

const Styles = (options, current) => {
  const [state, setState] = useState(current);

  const gridMaker = () => (
    <div className="columns">
      <div
        className="column"
        value={state}
        onChange={(e) => setState(e.target.value)}
      >
        {options.map((item) =>
          <button type="button" key={item} value={item}>{item}</button>)}
      </div>
    </div>
  );
  return [state, gridMaker, setState];
};

export default Styles;
