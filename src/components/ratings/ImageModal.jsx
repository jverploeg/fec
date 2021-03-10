// IMPORTS
import React from 'react';


// COMPONENT
const ImageModal = (props) => {
  return (
    <div className={"img-modal-wrapper"}>
      <div className={"img-modal-backdrop"} />
      <div className={"img-modal-box"}>
        {props.children}
      </div>
    </div>
  )
};


// EXPORTS
export default ImageModal;
