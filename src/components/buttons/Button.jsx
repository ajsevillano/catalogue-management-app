import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSpinner } from '@fortawesome/free-solid-svg-icons';

export default function Button({
  icon,
  size,
  text,
  buttonLoading,
  button,
  inlineStyle,
}) {
  return (
    <div className={`Button-${button}`} style={inlineStyle}>
      <button disabled={buttonLoading}>
        <FontAwesomeIcon
          spin={buttonLoading ? true : false}
          icon={buttonLoading ? faSpinner : icon}
          size={size}
        />
        {'  '}
        {buttonLoading ? 'Actualizando...' : text}
      </button>
    </div>
  );
}
