import React from 'react';
import MenuBar from './Menubar/Menubar';
import Title from './Title/Title';
import Profile from './Profile/Profile';

function Header() {
  return (
    <div className="header">
      <div className="header-container">
        <Profile />
        <Title />
        <MenuBar />
      </div>
    </div>
  );
}

export default Header;
