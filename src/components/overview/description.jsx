import React, { useState } from 'react';

function Description(focus) { // focus.product
  // stuff and states
  const [something, setSomething] = useState(0);

  return (
    <div className="tile is-child box">
      {focus.product.description}
    </div>
  );
}

export default Description;
