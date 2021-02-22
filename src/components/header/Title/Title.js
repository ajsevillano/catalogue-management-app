import React from 'react';
import Button from '../../buttons/ButtonSecundary';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faDownload,
  faCheck,
  faTimes,
} from '@fortawesome/free-solid-svg-icons';

function Title({ title, status }) {
  return (
    <div className="title-container">
      <div className="title-status">
        <h1>{title}</h1>

        {status == 1 ? (
          <p className="active">
            <FontAwesomeIcon icon={faCheck} /> PUBLICADO
          </p>
        ) : (
          <p className="inactive">
            <FontAwesomeIcon icon={faTimes} /> NO PUBLICADO
          </p>
        )}
      </div>
      <Button icon={faDownload} size={'sm'} text={'Descargar'} />
    </div>
  );
}

export default Title;
