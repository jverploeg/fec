/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React, { useState, useEffect } from 'react';
// import Modal from 'bulma-modal-fx';
// import "bulma/css/bulma.css";

const Image = (focus) => {
  const { current } = focus;

  const [photoSet, setPhotos] = useState([]);
  const [currentPhoto, setCurrentPhoto] = useState({});
  const [modal, setActive] = useState('');
  const [zoom, setZoom] = useState(true);


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
    setCurrentPhoto(current[0]);
  }, [focus.current]);

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

  // click handler to change the view from thumbnail selection
  const change = (e) => {
    e.persist();
    const thumb = e.target.src;
    const u = e.target.alt;
    const newFocus = {
      thumbnail_url: thumb,
      url: u,
    };
    setCurrentPhoto(newFocus);
  };

  // modal functionality needs to be attached to a click listener
  // TODO:modal doesn't work for the images that have wider ratios...works for all vertical images
  return (
    <div>
      <div className={`modal modal-fx-3dFlipVertical ${modal}`}>
        <div className="modal-content is-huge">
          <div className="container is-fluid">
            <img
              // giclassName={`image-zoom ${zoom}`}
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
      <div className="tile is-parent is-vertical-center">
        <figure className="fixed-container">
          <img
            className="image-container"
            src={currentPhoto.url}
            alt={currentPhoto.thumbnail_url}
            onClick={(e) => open(e)}
          />
          <div className="tile is-child is-overlay is-vertical-center">
            <div className="tile is-vertical">
              {/* <div className="tile is-4" /> */}
              {photoSet && photoSet.map((item) => (
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
}

export default Image;
