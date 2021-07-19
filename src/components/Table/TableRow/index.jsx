import { Link } from 'react-router-dom';

const TableRow = ({ id, children }) => {
  return (
    <Link to={`/updateproduct/${id}`}>
      <div className="row">{children}</div>
    </Link>
  );
};

export default TableRow;
