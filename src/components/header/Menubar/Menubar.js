import React from 'react';

function Menubar() {
  return (
    <div className="menubar">
      <nav>
        <a className="active" href="">
          Todos los productos
        </a>{' '}
        <a href="/css/">Todos los negocios</a>
      </nav>
    </div>
  );
}

export default Menubar;
