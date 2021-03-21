import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBell } from '@fortawesome/free-solid-svg-icons';
import Profilepicture from '../../../assets/img/profile.jpg';

const Profile = () => {
  return (
    <div className="profile">
      <p className="logo">Product Management App (Beta)</p>
      <FontAwesomeIcon className="bell-icon" icon={faBell} size="lg" />
      <img src={Profilepicture} alt="Profile picture" />
    </div>
  );
};

export default Profile;
