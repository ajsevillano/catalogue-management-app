import React from 'react';
import Button from '../../Forms/Button';
import { useHistory } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faDownload,
  faCheck,
  faTimes,
  faArrowLeft,
  faSave,
} from '@fortawesome/free-solid-svg-icons';

const Title = ({ title, status, button }) => {
  const history = useHistory();
  function handleBackArrow() {
    history.push('/');
  }
  return (
    <div className="title-container">
      <div className="title-status">
        {!status ? (
          <h1>{title}</h1>
        ) : status.length === 0 ? (
          <h1>Loading...</h1>
        ) : status[0] === 1 ? (
          <>
            <FontAwesomeIcon
              className="arrow"
              icon={faArrowLeft}
              onClick={handleBackArrow}
            />
            <h1>{title}</h1>
            <p className="active">
              <FontAwesomeIcon icon={faCheck} /> PUBLICADO
            </p>
          </>
        ) : (
          <>
            <FontAwesomeIcon
              className="arrow"
              icon={faArrowLeft}
              onClick={handleBackArrow}
            />
            <h1>{title}</h1>
            <p className="inactive">
              <FontAwesomeIcon icon={faTimes} /> NO PUBLICADO
            </p>
          </>
        )}
      </div>
      {button === 'primary' ? (
        <Button icon={faSave} size={'lg'} text={'Guardar'} button={button} />
      ) : (
        <Button
          icon={faDownload}
          size={'sm'}
          text={'Descargar'}
          button={button}
        />
      )}
    </div>
  );
};

export default Title;
