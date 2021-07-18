import TableRowSkeleton from './SkeletonRows/index.jsx';

export const generateSkeletonComp = () => {
  return [...Array(4)].map((undefined, index) => (
    <TableRowSkeleton key={index} />
  ));
};

export const ShowNumberOfItems = (filteredProducts) => {
  return filteredProducts().length === 0
    ? 'No hay productos que mostrar'
    : `total: ${filteredProducts().length} productos`;
};

export const ShowCategory = (loading, categories) => {
  return !loading
    ? categories?.map((item) => item.isActive && item.name)
    : 'Cargando...';
};
