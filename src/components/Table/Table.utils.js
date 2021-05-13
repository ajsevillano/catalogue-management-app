import TableRowSkeleton from './TableRowSkeleton';

export const generateSkeletonComp = () => {
  return [...Array(4)].map((undefined, index) => (
    <TableRowSkeleton key={index} />
  ));
};
