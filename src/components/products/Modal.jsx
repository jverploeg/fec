import React, { useState, useEffect } from 'react';

const Modal = (props) => {
  return (
    // <div className={`modal ${props.active}`>
    <div className={`modal ${props.active}`}>
      <div className="modal-background"></div>
      <div className="modal-card">
        <header class="modal-card-head">
          <p class="modal-card-title">Comparison</p>
        </header>
        <section class="modal-card-body">
          <div class="columns">
            <div class="column">
              Current Product Name
            </div>
            <div class="column">

            </div>
            <div class="column">
              Compared Product Name
            </div>
          </div>
        </section>
        <section class="modal-card-body">
          <div class="columns">
            <div class="column">
              {props.currentProd}
            </div>
            <div class="column">
              {props.characteristic}
            </div>
            <div class="column">
              {props.comparedProd}
            </div>
          </div>
        </section>
      </div>
      <button className="modal-close is-large" onClick={() => props.closeModal()} type="button" aria-label="close"/>
    </div>
  );
}

export default Modal;