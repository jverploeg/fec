import React, { useState } from 'react';

// COMPONENT
function RelatedProducts() {
  const [something, setSomething] = useState(0);

  return (
    <div className="columns is-centered">
      <div className="column is-one-fifth">
        <div className="card">
          <div className="card-image">
            <figure className="image is-4by3">
              <img src="https://bulma.io/images/placeholders/1280x960.png" alt="" />
            </figure>
          </div>
          <div className="card-content">
            <div className="content">
              <span>Category</span>
              <br />
              <strong>Expanded Product Name with Extra Text</strong>
            </div>

            <div className="content">
              <span>$123</span>
              <br />
              <span className="fa fa-star checked" />
              <span className="fa fa-star checked" />
              <span className="fa fa-star checked" />
              <span className="fa fa-star" />
              <span className="fa fa-star" />
            </div>
          </div>
        </div>
      </div>
      <div className="column is-one-fifth">
        <div className="card">
          <div className="card-image">
            <figure className="image is-4by3">
              <img src="https://bulma.io/images/placeholders/1280x960.png" alt="" />
            </figure>
          </div>
          <div className="card-content">
            <div className="content">
              <span>Category</span>
              <br />
              <strong>Expanded Product Name with Extra Text</strong>
            </div>

            <div className="content">
              <span>$123</span>
              <br />
              <span className="fa fa-star checked" />
              <span className="fa fa-star checked" />
              <span className="fa fa-star checked" />
              <span className="fa fa-star" />
              <span className="fa fa-star" />
            </div>
          </div>
        </div>
      </div>
      <div className="column is-one-fifth">
        <div className="card">
          <div className="card-image">
            <figure className="image is-4by3">
              <img src="https://bulma.io/images/placeholders/1280x960.png" alt="" />
            </figure>
          </div>
          <div className="card-content">
            <div className="content">
              <span>Category</span>
              <br />
              <strong>Expanded Product Name with Extra Text</strong>
            </div>

            <div className="content">
              <span>$123</span>
              <br />
              <span className="fa fa-star checked" />
              <span className="fa fa-star checked" />
              <span className="fa fa-star checked" />
              <span className="fa fa-star" />
              <span className="fa fa-star" />
            </div>
          </div>
        </div>
      </div>
      <div className="column is-one-fifth">
        <div className="card">
          <div className="card-image">
            <figure className="image is-4by3">
              <img src="https://bulma.io/images/placeholders/1280x960.png" alt="" />
            </figure>
          </div>
          <div className="card-content">
            <div className="content">
              <span>Category</span>
              <br />
              <strong>Expanded Product Name with Extra Text</strong>
            </div>

            <div className="content">
              <span>$123</span>
              <br />
              <span className="fa fa-star checked" />
              <span className="fa fa-star checked" />
              <span className="fa fa-star checked" />
              <span className="fa fa-star" />
              <span className="fa fa-star" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

// EXPORT
export default RelatedProducts;
