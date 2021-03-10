import React from 'react';

//Lottie animation helper and json import
import LottieAnimation from '../../utils/Lottie';
import * as success from '../../assets/animations/success.json';

const Success = () => {
  return (
    <div className="modal-content">
      <LottieAnimation animationName={success} height={120} width={120} />
      <h1>Producto añadidos</h1>
    </div>
  );
};

export default Success;
