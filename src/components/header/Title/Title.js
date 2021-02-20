import React from 'react';
import Button from '../../buttons/ButtonSecundary';
import { faDownload } from '@fortawesome/free-solid-svg-icons';

function Title({ title }) {
  return (
    <div className="title">
      <h1>{title}</h1>
      <Button icon={faDownload} size={'sm'} text={'Descargar'} />
    </div>
  );
}

export default Title;
