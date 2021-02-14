import React from 'react';
import MenuBar from '../Menubar/Menubar';
import Title from './Title/Title';
import Profile from './Profile/Profile';

function Header() {
  const categories = ['Todos los productos', 'Todos los negocios'];
  return (
    <section className="header">
      <div className="header-container wrapper">
        <Profile />
        <Title />
        <MenuBar categories={categories} />
      </div>
    </section>
  );
}

export default Header;
