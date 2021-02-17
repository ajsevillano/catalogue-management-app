import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export default function ButtonPrimary({ icon, size, text }) {
  return (
    <div className="Button-primary">
      <button>
        <FontAwesomeIcon icon={icon} size={size} /> {text}
      </button>
    </div>
  );
}
