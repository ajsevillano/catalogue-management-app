import React from 'react';
import Button from '../../buttons/ButtonSecundary';
import { faDownload } from '@fortawesome/free-solid-svg-icons';

function Title() {
  return (
    <div className="title">
      <h1>Productos</h1>
      <Button icon={faDownload} size={'sm'} text={'Descargar'} />
    </div>
  );
}

export default Title;
