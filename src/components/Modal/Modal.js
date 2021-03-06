import React, { useRef } from 'react';
import ModalPicture from '../../assets/img/add-product.jpg';

const Modal = ({ content, modalOpen }) => {
  if (!modalOpen) {
    return null;
  }

  return (
    <div className="modal-container">
      <div className="modal-box">
        <div className="modal-img">
          <img src={ModalPicture} alt="Modal picture" />
        </div>
        <div className="modal-content">{content}</div>
      </div>
    </div>
  );
};

export default Modal;
