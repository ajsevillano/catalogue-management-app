import React from 'react';
import Noresults from '../../assets/img/noData.png';
import Button from '../buttons/ButtonPrimary';
import { faPlus } from '@fortawesome/free-solid-svg-icons';

function TableRownoresults() {
  return (
    <div className="row-noresults">
      <img src={Noresults} alt="" />
      <h2>No se ha encontrado resultados</h2>
      <p>
        Parece que esta categoría aun no tiene productos, ¿Te gustaría añadir
        uno?
      </p>
      <Button icon={faPlus} size={'sm'} text={'Añadir productos'} />
    </div>
  );
}

export default TableRownoresults;
