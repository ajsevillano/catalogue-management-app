import React from 'react';
import Profilepicture from '../../../assets/img/profile.jpg';

function Profile() {
  return (
    <div className="profile">
      <p>Search</p>

      <img src={Profilepicture} alt="Profile picture" />
    </div>
  );
}

export default Profile;
