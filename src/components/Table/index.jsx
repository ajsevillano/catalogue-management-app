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
            name={product.nombre}
            brand={product.marca}
            size={product.tamano}
            status={product.activo}
            category={product.tipo}
            lastUpdate={product.last_update}
            favorite={product.destacado}
          />
        ))
      )}
    </div>
  );
};

export default Table;
