/** Button UI Component, logic to be removed
 * @param {State} icon A font awesome icon. Check https://fontawesome.com/icons for types.
 * @param {string} size Defines the font awesome size of the icon
 * @param {string} text Defines the text in the button
 * @param {state} buttonLoading Change the icon to a spinner while the update is executed
 * @param {string} button Defines the style of the button: 'primary' and 'secundary' allowed.
 * @param {string} inlineStyle Optional inline style
 * @param {function} handleOnClick Callback function, defines onclick button functionality
 */

import MenuNav from '../header/MenuNav/Index';
import Title from './Title/Title';
import Profile from './Profile/Profile';

function Header({ status, title, button }) {
  return (
    <section id="header" className="header">
      <div className="wrapper">
        <Profile />
        <Title title={title} status={status} button={button} />
        <MenuNav />
      </div>
    </section>
  );
}

export default Header;
