import React from 'react';

const Modal = ({ content }) => {
  return (
    <div className="modal-container">
      <div className="modal-box">
        <div className="modal-img"></div>
        <div className="modal-content">{content}</div>
      </div>
    </div>
  );
};

export default Modal;
