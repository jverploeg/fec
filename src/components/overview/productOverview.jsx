import React, { useState } from 'react';
import Image from './image';
import Details from './details';
import Description from './description';

// COMPONENT
function ProductOverview() {
  const [something, setSomething] = useState(0);

  return (
    <div>
      <section className="hero is-grey-dark is-fullheight">
        <div className="container is-fluid">
          <div className="tile is-ancestor has-text-centered">
            <div className="tile is-vertical">
              <div className="tile">
                <div className="tile is-parent">
                  Image
                </div>
                <div className="tile is-parent">
                  <div className="tile is-child box">
                    Details
                  </div>
                </div>
              </div>
              <div className="tile is-parent">
                Description
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
