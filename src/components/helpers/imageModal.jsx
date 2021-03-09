/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React, { useState, useEffect } from 'react';

const ImageModal = (options, current) => {
  const [state, setState] = useState(current);
  // create a state for displaying the modal
  const [modal, setActive] = useState('');
  // const active = modal ? 'is-active' : '';

  // const toggle = () => {
  //   setActive(active);
  //   console.log(active);
  // };
  const open = () => {
    setActive('is-active');
    // toggle();
    console.log(modal);
  };
  const close = () => {
    setActive('');
    // toggle();
    console.log(modal);
  };

  // click handler to change the view/current
  const change = (e) => {
    e.persist();
    // console.log(e);
    // SyntheticBaseEvent
    const thumb = e.target.src;
    const u = e.target.alt;
    const newFocus = {
      thumbnail_url: thumb,
      url: u,
    };
    setState(newFocus);
  };

  // change current image focus on prop change
  useEffect(() => {
    setState(current);
    // setActive(modal);
  }, [current]);

  // modal functionality needs to be attached to a click listener

  // TODO:modal doesn't work for the images that have wider ratios...works for all vertical images
  const imageMaker = () => (
    <div>
      <div className={`modal ${modal}`}>
        <div className="modal-content">
          <div className="iframe-container is-fluid">
            <iframe
              className="iframe"
              title="focus"
              src={state.url}
              alt={state.thumbnail_url}
            />
          </div>
        </div>
        <button
          className="modal-close is-large"
          onClick={() => close()}
          type="button"
          aria-label="close"
        />
      </div>
      <div className="tile is-parent is-vertical-center">
        <figure className="image is-fullwidth">
          <img
            className="is-fullwidth"
            src={state.url}
            alt={state.thumbnail_url}
            onClick={(e) => open(e)}
          />
          <div className="tile is-child is-overlay is-vertical-center">
            <div className="tile is-vertical">
              {/* <div className="tile is-4" /> */}
              {options.map((item) => (
                <figure className="image is-32x32" key={item.thumbnail_url}>
                  <img
                    className="is-square"
                    src={item.thumbnail_url}
                    alt={item.url}
                    onClick={(e) => change(e)}
                  />
                </figure>
              ))}
            </div>
          </div>
        </figure>
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


/* <figure className="image is-256x256 is-inline-block">
<img
  src={state.url}
  alt={state.thumbnail_url}
  // onClick={(e) => modalToggle(e)}
/>
<div className="tile is-child">
  <div className="image-overlay">
    <li>a</li>
  </div>
</div>
</figure>
</div>
<div className="tile is-parent is-vertical">
<div className="tile is-child is-pulled-left">
{options.map((item) => (
  <div className="tile">
    <figure className="image is-square is-64x64" key={item.thumbnail_url}>
      <img
        src={item.thumbnail_url}
        alt={item.url}
        onClick={(e) => change(e)}
      />
    </figure>
  </div>
))}
</div>
</div>
</div> */
