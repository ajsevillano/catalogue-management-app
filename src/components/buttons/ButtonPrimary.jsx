import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSpinner } from '@fortawesome/free-solid-svg-icons';

export default function ButtonPrimary({ icon, size, text, buttonState }) {
  return (
    <div className="Button-primary">
      <button disabled={buttonState}>
        <FontAwesomeIcon
          spin={buttonState}
          icon={buttonState ? faSpinner : icon}
          size={size}
        />{' '}
        {buttonState ? 'Actualizando...' : text}
      </button>
    </div>
  );
}
