import React from 'react';

//Lottie animation helper and json import
import LottieAnimation from '../../utils/Lottie';
import * as error from '../../assets/animations/error.json';

const Error = () => {
  return (
    <div className="modal-content">
      <LottieAnimation animationName={error} height={120} width={120} />
      <h1>Oh no! algo ha salido mal</h1>
    </div>
  );
};

export default Error;
