import React from 'react';
import Button from '../forms/button/Index';
import { faPlus } from '@fortawesome/free-solid-svg-icons';

//Lottie animation helper and json import
import LottieAnimation from '../../utils/Lottie';
import * as notFound from '../../assets/animations/empty.json';

const TableRownoresults = () => {
  return (
    <div className="row-noresults">
      <LottieAnimation animationName={notFound} height={120} width={120} />
      <h2>No se ha encontrado resultados</h2>
      <p>
        Parece que no se encuentra ningun producto ¿Te gustaría añadir uno
        nuevo?
      </p>
      <Button
        icon={faPlus}
        size={'sm'}
        text={'Añadir producto'}
        button={'primary'}
      />
    </div>
  );
};

export default TableRownoresults;