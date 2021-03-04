import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSpinner } from '@fortawesome/free-solid-svg-icons';

export default function ButtonPrimary({ icon, size, text, buttonLoading }) {
  return (
    <div className="Button-primary">
      <button disabled={buttonLoading}>
        <FontAwesomeIcon
          spin={buttonLoading ? true : false}
          icon={buttonLoading ? faSpinner : icon}
          size={size}
        />{' '}
        {buttonLoading ? 'Actualizando...' : text}
      </button>
    </div>
  );
}
