import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export default function ButtonSecundary({ icon, size, text }) {
  return (
    <div className="Button-secundary">
      <button>
        <FontAwesomeIcon icon={icon} size={size} /> {text}
      </button>
    </div>
  );
}
