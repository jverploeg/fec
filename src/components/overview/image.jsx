/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React, { useState, useEffect } from 'react';
// import Modal from 'bulma-modal-fx';
// import "bulma/css/bulma.css";

const Image = (focus) => {
  const { current } = focus;
  //console.log({current});

  // const currentIndex = 0;

  const [photoSet, setPhotos] = useState([]);
  const [currentIndex, setIndex] = useState(0);
  const [currentPhoto, setCurrentPhoto] = useState({});
  const [modal, setActive] = useState('');
  const [zoom, setZoom] = useState(true);

  // add state for current index



  // const active = modal ? 'is-active' : '';
  // const toggle = () => {
  //   setActive(active);
  //   console.log(active);
  // };


  // EFFECTS to rerender
  // on load
  useEffect(() => {
    setPhotos(current);
  }, [focus.current]);

  useEffect(() => {
    setIndex(0);
  }, [focus.current]);

  useEffect(() => {
    setCurrentPhoto(current[currentIndex]);
  }, [focus.current, currentIndex]);

  const open = () => {
    setActive('is-active');
    // toggle();
    // console.log(modal);
  };
  const close = () => {
    setActive('');
    // toggle();
    // console.log(modal);
  };
  const toggleO = () => {
    // const active = !zoom;
    // const active = zoom ? 'is-active' : '';
    console.log(zoom);
    setZoom(!zoom);
  };

  // Right image select
  const right = () => {
    // what is current? where in array?
    const length = (photoSet.length - 1); // destructure length
    const cur = currentIndex;
    if (cur !== length) {
      const newIndex = cur + 1;
      setIndex(newIndex);
      // setCurrentPhoto(photoSet[currentIndex]);
    }
  };
  // LEFT image select
  const left = () => {
    // what is current? where in array?
    // const length = photoSet; // destructure length
    const cur = currentIndex;
    if (cur !== 0) {
      const newIndex = cur - 1;
      setIndex(newIndex);
      // setCurrentPhoto(photoSet[currentIndex]);
    }
  };

  // click handler to change the view from thumbnail selection
  const change = (e) => {
    // e.persist();
    let iString = e.target.getAttribute('index');
    //console.log(typeof(index));
    let index = Number(iString);
    console.log({index});
    // save index for left right buttons to make logic easier
    // const thumb = e.target.src;
    // const u = e.target.alt;
    // const newFocus = {
    //   // id: index,
    //   thumbnail_url: thumb,
    //   url: u,
    // };
    setIndex(index);
    // setCurrentPhoto(newFocus);
    // setCurrentPhoto(photoSet[currentIndex]);


    console.log({photoSet});
    console.log({currentIndex});
    console.log({currentPhoto});
  };

  // modal functionality needs to be attached to a click listener
  // TODO:modal doesn't work for the images that have wider ratios...works for all vertical images
  return (
    <div>
      <div className={`modal modal-fx-3dFlipVertical ${modal}`}>
        <div className="modal-content is-huge">
          <div className="container is-fluid">
            <img
              // className={`image-zoom ${zoom}`}
              className="image"
              // title="focus"
              src={currentPhoto.url}
              alt={currentPhoto.thumbnail_url}
              onClick={() => toggleO()}
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
      <div className="fixed container">
        <img
          className="image-container"
          src={currentPhoto.url}
          alt={currentPhoto.thumbnail_url}
          onClick={(e) => open(e)}
        />
        <button
          className="left"
          type="button"
          onClick={(e) => left(e)}
        >
          <i className="fa fa-angle-double-left" />
        </button>
        <button
          className="right"
          type="button"
          onClick={() => right()}
        >
          <i className="fa fa-angle-double-right" />
        </button>
        <div className="tile is-child is-overlay is-vertical-center">
          <div className="tile is-vertical">
            {/* <div className="tile is-4" /> */}
            {photoSet && photoSet.map((item, index) => (
              <figure className="image is-32x32">
                <img
                  className="is-square"
                  index={index}
                  // value={JSON.stringify(key)}
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
};

export default Image;

{/* <figure className="fixed-container">
<img
  className="image-container"
  src={currentPhoto.url}
  alt={currentPhoto.thumbnail_url}
  onClick={(e) => open(e)}
/>
<div className="tile is-child is-overlay is-vertical-center">
  <div className="tile is-vertical">
    {/* <div className="tile is-4" /> */}
//     {photoSet && photoSet.map((item) => (
//       <figure className="image is-32x32" key={item.thumbnail_url}>
//         <img
//           className="is-square"
//           src={item.thumbnail_url}
//           alt={item.url}
//           onClick={(e) => change(e)}
//         />
//       </figure>
//     ))}
//   </div>
// </div>
// </figure> */}

// .box-five {
//   background-image: url("https://images.unsplash.com/photo-1455218873509-8097305ee378?ixlib=rb-0.3.5&q=85&fm=jpg&crop=entropy&cs=srgb&s=9a01d670daebc6fcf8e67f912178e164");
//   background-size: cover;
//   background-position: center;
//   background-repeat:no-repeat;
// }
// <div class="tile is-parent">
// <article class="tile is-child notification is-dark box-five">
//   <h1 class="title">05.</h1>
//   <p class="subtitle">Fuel your imagination</p>
//   <hr>

//   <p>This tile has a background Image</p>
// </article>

// </div>


      //   {/* <figure
      //     className="tile is-child notification is-dark image-fit"
      //     background-image={currentPhoto.url}
      //   > */}
      //   <h1 className="title">05.</h1>
      //   <p className="subtitle">Fuel your imagination</p>

      //   <p>This tile has a background Image</p>
      // </figure>
