import React, { forwardRef, useImperativeHandle } from 'react';
import ReactDOM from 'react-dom';


const NewReviewModal = forwardRef((props, ref) => {
  const { product } = props;
  const [isVisible, setIsVisible] = React.useState(false);

  useImperativeHandle(ref, () => {
    return {
      openModal: () => open(),
      closeModal: () => close()
    }
  });

  const open = () => {
    setIsVisible(true);
    // console.log({ isVisible });
  };
  const close = () => {
    setIsVisible(false);
  };

  if (isVisible) {
    return ReactDOM.createPortal(
      <div className="modal">
        <div className="modal-background" onClick={close}></div>
        <div className="modal-content">
          {props.children}
        </div>
        <button className="modal-close is-large" aria-label="close"></button>
      </div>, document.getElementById('new-review-modal-root'))
  }
  return null;
});

export default NewReviewModal;
