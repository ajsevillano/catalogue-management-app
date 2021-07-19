import { Link } from 'react-router-dom';

//Font awesome
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';

const TableRow = ({ id, status, favorite, children }) => {
  return (
    <Link to={`/updateproduct/${id}`}>
      <div className="row">
        {children}

        <div
          className={
            status == 1
              ? 'status-container status-on'
              : 'status-container status-off'
          }
        >
          <p>{status == 1 ? 'publicado' : 'no publicado'}</p>
        </div>

        <FontAwesomeIcon
          className={favorite == 1 ? 'star' : 'star-off'}
          icon={faStar}
          size="lg"
        />
      </div>
    </Link>
  );
};

export default TableRow;
