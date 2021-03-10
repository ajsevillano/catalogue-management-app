import React from 'react';

//Lottie animation helper and json import
import LottieAnimation from '../../utils/Lottie';
import * as error from '../../assets/animations/error.json';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';

//Components
import Button from '../buttons/Button';

const Error = ({ handleCancelButton }) => {
  return (
    <div className="modal-content-error">
      <LottieAnimation animationName={error} height={120} width={120} />
      <h1>
        <span>¡Oh no! </span>
        El producto no ha podido añadirse a la base de datos
      </h1>
      <p>
        El servidor no ha respondido a la petición, intentalo de nuevo en unos
        minutos.
      </p>
      <Button
        button={'primary'}
        text={'Continuar'}
        inlineStyle={{ marginRight: '20px' }}
        icon={faArrowRight}
        handleOnClick={handleCancelButton}
      />
    </div>
  );
};

export default Error;
