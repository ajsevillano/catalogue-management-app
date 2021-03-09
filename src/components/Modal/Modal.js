import React, { useRef } from 'react';

const Modal = ({ content, modalOpen }) => {
  if (!modalOpen) {
    return null;
  }

  return (
    <div className="modal-container">
      <div className="modal-box">{content}</div>
    </div>
  );
};

export default Modal;
