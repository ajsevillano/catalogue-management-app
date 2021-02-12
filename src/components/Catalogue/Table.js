import React from 'react';
import TableRow from './TableRow';

function Table() {
  return (
    <div id="table" className="wrapper">
      <div className="table-catalogue">
        <div className="table-header">
          <h2>Categoría: Vinos Todos los productos</h2>
          <p>total: (170)</p>
        </div>
        <TableRow id={1} />
        <TableRow id={2} />
        <TableRow id={3} />
        <TableRow id={4} />
      </div>
    </div>
  );
}

export default Table;
