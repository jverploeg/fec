/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React, { useState, useEffect } from 'react';
// import Modal from 'bulma-modal-fx';
// import "bulma/css/bulma.css";

const Image = (focus) => {
  const { current } = focus;

  // STATES
  const [photoSet, setPhotos] = useState([]);
  const [currentIndex, setIndex] = useState(0);
  const [currentPhoto, setCurrentPhoto] = useState({});
  const [modal, setActive] = useState('');
  const [zoom, setZoom] = useState(true);

  // EFFECTS FOR RERENDERING
  // on load
  useEffect(() => {
    setPhotos(current);
    setIndex(0);
  }, [focus.current]);
  // on index change
  useEffect(() => {
    setCurrentPhoto(current[currentIndex]);
  }, [focus.current, currentIndex]);

  // MODAL HANDLERS
  const open = () => {
    setActive('is-active');
  };
  const close = () => {
    setActive('');
  };
  const toggleO = () => {
    // const active = !zoom;
    // const active = zoom ? 'is-active' : '';
    setZoom(!zoom);
  };

  // IMAGE SELECTION
  // Right image select
  const right = () => {
    const length = (photoSet.length - 1);
    const cur = currentIndex;
    if (cur !== length) {
      const newIndex = cur + 1;
      setIndex(newIndex);
    }
  };
  // LEFT image select
  const left = () => {
    const cur = currentIndex;
    if (cur !== 0) {
      const newIndex = cur - 1;
      setIndex(newIndex);
    }
  };
  // THUMBNAIL select
  const change = (e) => {
    const iString = e.target.getAttribute('index');
    const index = Number(iString);
    setIndex(index);
  };

  // DOM
  return (
    <div className="tile is-child box">
      <div className={`modal modal-fx-3dFlipVertical ${modal}`}>
        <div className="modal-content is-huge is-image">
          <img
            // className={`image-zoom ${zoom}`}
            className="image"
            // title="focus"
            src={currentPhoto.url}
            alt={currentPhoto.thumbnail_url}
            onClick={() => toggleO()}
          />
        </div>
        <button
          className="modal-close is-large"
          onClick={() => close()}
          type="button"
          aria-label="close"
        />
      </div>

      <div className="fixed-container">

        <div className="fixed-container-image">
          <div className="fixed-parent">
            <img
              className="image-container"
              src={currentPhoto.url}
              alt={currentPhoto.thumbnail_url}
              onClick={(e) => open(e)}
            />
          </div>
        </div>
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


        <div className="fixed-container-thumbs">
          {photoSet && photoSet.map((item, index) => (
            <div className="level-item">
              <div className="fixed-thumb">
                <img
                  className="thumb-image"
                  index={index}
                  src={item.thumbnail_url}
                  alt={item.url}
                  onClick={(e) => change(e)}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Image;
