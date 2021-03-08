/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React, { useState, useEffect } from 'react';

const ImageModal = (options, current) => {
  const [state, setState] = useState(current);
  // create a state for displaying the modal
  // const [modal, isActive] = useState(false);
  const [modal, isActive] = useState(false);
  const active = modal ? 'is-active' : '';

  // change current image focus on prop change
  useEffect(() => {
    setState(current);
  }, [current]);

  const Modal = () => (
    // modal will either be "is-active" or ""/null
    // return (
    <div className={`modal ${modal}`}>
      <div className="modal-content">
        <figure className="image is-4by3">
          <img src={state.url} alt={state.thumbnail_url} />
        </figure>
      </div>
      <button className="modal-close is-large" type="button" aria-label="close" />
    </div>
    // );
  );

  const toggle = () => {
    isActive(!active);
  };
  const modalToggle = (e) => {
    // toggle();
    e.persist();
    console.log(e);
  };

  // click handler to change the view/current
  const change = (e) => {
    e.persist();
    // SyntheticBaseEvent
    const thumb = e.target.src;
    const u = e.target.alt;
    const newFocus = {
      thumbnail_url: thumb,
      url: u,
    };
    setState(newFocus);
  };

  // modal functionality needs to be attached to a click listener
  const imageMaker = () => (
    <div className="card">
      <div className="card-image has-text-centered">
        <figure className="image is-256x256 is-inline-block" onClick={(e) => modalToggle(e)}>
          <img
            src={state.url}
            alt={state.thumbnail_url}
            // onClick={(e) => modalToggle(e)}
          />
        </figure>
      </div>
      <div className="card-content is-overlay">
        <div className="tile is-parent is-vertical is-pulled-left">
          <div className="tile is-child">
            {options.map((item) => (
              <figure className="image is-square is-64x64" key={item.thumbnail_url}>
                <img
                  src={item.thumbnail_url}
                  alt={item.url}
                  onClick={(e) => change(e)}
                />
              </figure>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
  return [state, imageMaker, setState];
};

export default ImageModal;

// // <div className="column">
// <div className="card equal-height">
//   <div className="card-image has-text-centered">
//     <figure className="image is-256x256 is-inline-block">
//       <img src={state.url} alt={state.thumbnail_url} />
//     </figure>
//   </div>
//   <div className="card-content is-overlay">
//     <div className="tile is-parent is-vertical is-pulled-left">
//       <div className="tile is-child">
//         {options.map((item) => (
//           <figure className="image is-square is-64x64" key={item.thumbnail_url}>
//             <img
//               src={item.thumbnail_url}
//               alt={item.url}
//               onClick={(e) => change(e)}
//             />
//           </figure>
//         ))}
//       </div>
//     </div>
//   </div>
// </div>
// // </div>

//   {/* <div className="card-image"> */}
//   <div className="modal">
//     <div className="modal-background">
//       <figure className="image">
//         <img src={state.url} alt={state.thumbnail_url} />
//       </figure>
//     </div>
//     <div className="modal-content">
//       <figure className="image is-4by3">
//         <img src={state.url} alt={state.thumbnail_url} />
//       </figure>
//     </div>
//     <button className="modal-close is-large" type="button" aria-label="close" />
//   </div>
// </div>
// <div className="card-content is-overlay">
//   <div className="tile is-parent is-vertical is-pulled-left">
//     <div className="tile is-child">
//       {options.map((item) => (
//         <figure className="image is-square is-64x64" key={item.thumbnail_url}>
//           <img
//             src={item.thumbnail_url}
//             alt={item.url}
//             onClick={(e) => change(e)}
//           />
//         </figure>
//       ))}
//     </div>
//   </div>
// </div>
// </div>

// const modal = (e) => (
//   console.log('clicked')
//   <div className="modal is-active">
//     <div className="modal-content">
//       <figure className="image is-4by3">
//         <img src={state.url} alt={state.thumbnail_url} />
//       </figure>
//     </div>
//     <button className="modal-close is-large" type="button" aria-label="close" />
//   </div>
// );