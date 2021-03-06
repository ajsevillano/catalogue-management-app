import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const ButtonOpenModal = ({ button, icon, size, text, handleModalButton }) => {
  return (
    <div className={`Button-${button}`}>
      <button onClick={handleModalButton}>
        <FontAwesomeIcon icon={icon} size={size} />
        {text}
      </button>
    </div>
  );
};

export default ButtonOpenModal;
