//Font awesome
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSort, faCog } from '@fortawesome/free-solid-svg-icons';

//Components
import TableRow from './TableRow';
import NoResultsScreen from './NoResultsScreen';

//Utils
import {
  generateSkeletonComp,
  ShowNumberOfItems,
  ShowCategory,
} from './Table.utils';

import DefaultImg from '../../assets/img/iddefault.jpg';

const Table = ({
  categories,
  loading,
  productsData,
  setProductsData,
  orderText,
  setOrderText,
  filter,
}) => {
  const updateOrder = () => {
    const reverseData = [...productsData].reverse();
    setProductsData(reverseData);
    setOrderText(
      orderText == 'Más recientes' ? 'Más antiguos' : 'Más recientes'
    );
  };

  const filteredProducts = () => {
    return productsData.filter((product) =>
      !filter
        ? product
        : product.nombre.toLowerCase().includes(filter.search.toLowerCase())
    );
  };

  const DefaultImage = (e) => {
    e.target.setAttribute('src', DefaultImg);
  };

  //Format the date from timestamp to human-friendly date string
  const formattedTime = (lastUpdate) => {
    return new Date(lastUpdate * 1000).toLocaleString();
  };

  return (
    <div className="table-catalogue">
      <div className="table-header">
        <h2>{ShowCategory(loading, categories)}</h2>
        <p>{ShowNumberOfItems(filteredProducts)}</p>
        <p className="sort-order">
          <FontAwesomeIcon className="faCog" icon={faCog} size="1x" />
          ordenar por <span onClick={updateOrder}>{orderText}</span>
          <FontAwesomeIcon className="sort" icon={faSort} size="sm" />
        </p>
      </div>
      {loading ? (
        generateSkeletonComp()
      ) : filteredProducts().length === 0 ? (
        <NoResultsScreen />
      ) : (
        filteredProducts().map((product) => (
          <TableRow
            key={product.id}
            id={product.id}
            status={product.activo}
            favorite={product.destacado}
          >
            <div className="img-container">
              <img
                src={`https://www.ajsevillano.com/projects/pim/img/Thumbnails/id${product.id}.jpg`}
                alt={product.nombre}
                key={product.id}
                onError={(e) => DefaultImage(e)}
              />
            </div>
            <div className="item-id">
              <h2>ID</h2>
              <p>#{product.id}</p>
            </div>
            <div className="name">
              <h2>{product.nombre}</h2> <p>{product.tamano}</p>
            </div>
            <p className="brand">{product.marca}</p>
            <p className="categoria">{product.tipo}</p>
            <div className="last-edited">
              <h2>Última edición</h2>
              <p>{formattedTime(product.last_update)}</p>
            </div>
          </TableRow>
        ))
      )}
    </div>
  );
};

export default Table;
