import React from 'react';
import Button from '../../buttons/ButtonSecundary';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faDownload,
  faCheck,
  faTimes,
} from '@fortawesome/free-solid-svg-icons';

const Title = ({ title, status }) => {
  return (
    <div className="title-container">
      <div className="title-status">
        {!status ? (
          <h1>{title}</h1>
        ) : status.length == 0 ? (
          <h1>Loading...</h1>
        ) : status == 1 ? (
          <>
            <h1>{title}</h1>
            <p className="active">
              <FontAwesomeIcon icon={faCheck} /> PUBLICADO
            </p>
          </>
        ) : (
          <>
            <h1>{title}</h1>
            <p className="inactive">
              <FontAwesomeIcon icon={faTimes} /> NO PUBLICADO
            </p>
          </>
        )}
      </div>
      <Button icon={faDownload} size={'sm'} text={'Descargar'} />
    </div>
  );
};

export default Title;
