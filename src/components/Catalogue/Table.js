import React from 'react';
import TableRow from './TableRow';

function Table() {
  return (
    <div id="table" className="wrapper">
      <div className="table-catalogue">
        <div className="table-header">
          <h2>Todos los productos</h2>
          <p>total: (170)</p>
        </div>
        <TableRow />
      </div>
    </div>
  );
}

export default Table;
