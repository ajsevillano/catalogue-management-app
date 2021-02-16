import React from 'react';
import Noresults from '../../assets/img/noData.png';

function TableRownoresults() {
  return (
    <div className="row-noresults">
      <img src={Noresults} alt="" />
      <h2>No se ha encontrado resultados</h2>
      <p>
        Parece que esta categoría aun no tiene productos, ¿Te gustaría añadir
        uno?
      </p>
      <button>Añadir producto</button>
    </div>
  );
}

export default TableRownoresults;
