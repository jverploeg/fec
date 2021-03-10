import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Modal = (props) => {
  return (
    <div className="modal">
      <div className="modal-background"></div>
      <div className="modal-content">
        <p className="image is-4by3">
          <img src="https://bulma.io/images/placeholders/1280x960.png" alt="" />
          <h1>Hello</h1>
        </p>
      </div>
    </div>
  );
}

export default Modal;