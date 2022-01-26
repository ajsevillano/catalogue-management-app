//Font awesome
import { faPlus } from '@fortawesome/free-solid-svg-icons';
//Components
import Button from '../forms/button';

const NewProductBar = ({ handleOnClick }) => {
  return (
    <div className="sort-bar">
      <p>Inicio - Productos</p>
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

export default NewProductBar;
