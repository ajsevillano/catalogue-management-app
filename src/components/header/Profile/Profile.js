import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBell } from '@fortawesome/free-solid-svg-icons';
import Profilepicture from '../../../assets/img/profile.jpg';

function Profile() {
  return (
    <div className="profile">
      <p>Gestión 3.0</p>
      <FontAwesomeIcon className="bell-icon" icon={faBell} size="lg" />
      <img src={Profilepicture} alt="Profile picture" />
    </div>
  );
}

export default Profile;
