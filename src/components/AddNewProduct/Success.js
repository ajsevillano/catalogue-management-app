import React from 'react';

//Lottie animation helper and json import
import LottieAnimation from '../../utils/Lottie';
import * as success from '../../assets/animations/success.json';
import { faTimes } from '@fortawesome/free-solid-svg-icons';

//Components
import Button from '../buttons/Button';

const Success = ({ handleCancelButton }) => {
  return (
    <div className="modal-content">
      <LottieAnimation animationName={success} height={120} width={120} />
      <h1>Producto añadidos</h1>
      <Button
        button={'primary'}
        text={'Continuar'}
        inlineStyle={{ marginRight: '20px' }}
        icon={faTimes}
        handleOnClick={handleCancelButton}
      />
    </div>
  );
};

export default Success;
