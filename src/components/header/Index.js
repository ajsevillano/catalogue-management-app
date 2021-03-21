/** Button UI Component, logic to be removed
 * @param {State} status Defines the status of published item
 * @param {string} title Defines the title of the page.
 * @param {string} button Defines the style of the button
 */

import MenuNav from '../header/MenuNav/Index';
import Title from './Title/Index';
import Profile from './Profile/Index';

const Header = ({ status, title, button }) => {
  return (
    <section id="header" className="header">
      <div className="wrapper">
        <Profile />
        <Title title={title} status={status} button={button} />
        <MenuNav />
      </div>
    </section>
  );
};

export default Header;
