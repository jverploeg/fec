import React from 'react';

class Description extends React.Component {
  // stuff and states
  state = {options: 1}

  render() {
    return (
      <React.Fragment>
        <article className="tile is-child box">
          Product Description
        </article>
      </React.Fragment>
    )
  }
};

export default Description;