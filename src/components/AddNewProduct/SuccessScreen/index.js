import React from 'react';

//Lottie animation helper and json import
import LottieAnimation from '../../../utils/Lottie';
import * as success from '../../../assets/animations/success.json';
import * as confetti from '../../../assets/animations/confetti.json';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';

//Components
import Button from '../../Forms/Button';

const Success = ({ handleCancelButton, productName }) => {
  return (
    <div className="modal-content-success">
      <LottieAnimation animationName={success} height={120} width={120} />
      <h1>
        ¡Perfecto!, Producto <span>{productName}</span> añadido
      </h1>
      <Button
        button={'primary'}
        text={'Continuar'}
        inlineStyle={{ marginRight: '20px' }}
        icon={faArrowRight}
        handleOnClick={handleCancelButton}
      />
      <div className="conffetti">
        <LottieAnimation animationName={confetti} height={270} width={270} />
      </div>
    </div>
  );
};

export default Success;
