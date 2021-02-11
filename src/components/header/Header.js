import React from 'react';
import MenuBar from './Menubar/Menubar';
import Title from './Title/Title';
import Profile from './Profile/Profile';

function Header() {
  return (
    <section className="header">
      <div className="header-container wrapper">
        <Profile />
        <Title />
        <MenuBar />
      </div>
    </section>
  );
}

export default Header;
