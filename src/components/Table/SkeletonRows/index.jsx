import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSpinner } from '@fortawesome/free-solid-svg-icons';

const TableRowSkeleton = () => {
  return (
    <div className="row-skeleton">
      <div className="img-container">
        <div className="img-skeleton"></div>
      </div>
      <div className="item-id-skeleton">
        <div className="h2-item-id-skeleton"></div>
        <p className="p-item-id-skeleton"></p>
      </div>
      <div className="name-skeleton">
        <div className="h2-name-skeleton"></div>
        <p className="p-name-skeleton"></p>
      </div>
      <div className="brand-skeleton">
        <p className="p-brand-skeleton"></p>
      </div>
      <div className="categoria-skeleton">
        <p className="p-categoria-skeleton"></p>
      </div>
      <div className="last-edited-skeleton">
        <div className="h2-last-edited-skeleton"></div>
        <p className="p-last-edited-skeleton"></p>
      </div>
      <div className="checkbox-container">
        <div className="checkbox-skeleton"></div>
      </div>
      <FontAwesomeIcon
        className="spinner-skeleton"
        icon={faSpinner}
        spin
        size="lg"
      />
    </div>
  );
};

export default TableRowSkeleton;
