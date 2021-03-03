import React from 'react';
import Image from './Image';
import Details from './details';
import Description from './description';

// COMPONENT
const ProductOverview = (props) => (
  <div>
    <section className="hero is-grey-dark is-fullheight">
      <div className="container is-fluid">
        <div className="tile is-ancestor has-text-centered">
          <div className="tile is-vertical">
            <div className="tile">
              <div className="tile is-parent is-7">
                <Image />
              </div>
              <div className="tile is-parent">
                <div className="tile is-child box">
                  <Details />
                </div>
              </div>
            </div>
            <div className="tile is-parent">
              <Description />
            </div>
          </div>
        </div>
      </div>
    </section>
    <section className="section space" />
  </div>
);

/* <div className="columns">
<div className="column">
  Product Description
</div>
</div> */

// EXPORTS
export default ProductOverview;
