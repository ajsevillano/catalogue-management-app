import React, { useState } from 'react';
import MenuBar from '../Menubar/Menubar';
import Title from './Title/Title';
import Profile from './Profile/Profile';

function Header({ title }) {
  const [categories, setCategories] = useState([
    { name: 'Todos los productos', isActive: true },
    { name: 'Todos los negocios', isActive: false },
  ]);
  return (
    <section id="header" className="header">
      <div className="wrapper">
        <Profile />
        <Title title={title} status={'publicado'} />
        <MenuBar categories={categories} />
      </div>
    </section>
  );
}

export default Header;
