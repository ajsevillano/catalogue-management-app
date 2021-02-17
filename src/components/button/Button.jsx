import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
export default function Button({ icon, size, text }) {
  return (
    <div className="Button">
      <button>
        <FontAwesomeIcon icon={icon} size={size} /> {text}
      </button>
    </div>
  );
}
