import React, { useState } from 'react';

// make this dropDown universal if we need to use for multiple features
const DropDown = (name, label, defaultState, options) => {
  const [state, setState] = useState(defaultState);
  const maker = () => (
    <label innerHTML={label}>
      {label}
      <select
        id={label}
        value={state}
        onChange={(e) => setState(e.target.value)}
        disabled={!options.length}
      >
        <option>{name}</option>
        {options.map((item) =>
          <option key={item} value={item}>{item}</option>)}
      </select>
    </label>
  );
  return [state, maker, setState];
};

export default DropDown;
