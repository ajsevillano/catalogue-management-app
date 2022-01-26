//Font awesome
import { faPlus } from '@fortawesome/free-solid-svg-icons';

import Button from '../Forms/Button';

const BreadcrumbsBar = ({ handleOnClick }) => {
  return (
    <div className="sort-bar">
      <p>Inicio &gt; Productos</p>
      <Button
        handleOnClick={handleOnClick}
        icon={faPlus}
        size={'sm'}
        text={'Añadir producto'}
        button={'primary'}
      />
    </div>
  );
};

export default BreadcrumbsBar;
