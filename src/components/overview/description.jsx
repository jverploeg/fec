import React, { useState } from 'react';

function Description() {
  // stuff and states
  const [something, setSomething] = useState(0);

  return (
    <div>
      <article className="tile is-child box">
        Product Description
      </article>
    </div>
  );
}

export default Description;
