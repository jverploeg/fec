import React, { useState } from 'react';
import Image from './image';
import Details from './details';
import Description from './description';

// COMPONENT
function ProductOverview(focus) {
  const [meta, setMeta] = useState([]);
  const current = focus.product;

  // axios get from local host

  return (
    <div>
      <section className="hero is-grey-dark is-fullheight">
        <div className="container is-fluid">
          <div className="tile is-ancestor has-text-centered">
            <div className="tile is-vertical">
              <div className="tile">
                <div className="tile is-parent">
                  <Image product={current} />
                </div>
                <div className="tile is-parent">
                  <div className="tile is-child box">
                    <Details product={current} />
                  </div>
                </div>
              </div>
              <div className="tile is-parent">
                <div className="tile is-child box">
                  <Description product={current} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="section space" />
    </div>
  );
}

// EXPORT
export default ProductOverview;
