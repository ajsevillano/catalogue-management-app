/** Button UI Component, logic to be removed
 * @param {Object} icon A font awesome icon. Check https://fontawesome.com/icons for types.
 * @param {string} size Defines the font awesome size of the icon
 * @param {string} text Defines the text in the button
 * @param {state} buttonLoading Change the icon to a spinner while the update is executed
 * @param {string} button Defines the style of the button: 'primary' and 'secundary' allowed.
 * @param {string} inlineStyle Optional inline style
 * @param {function} handleOnClick Callback function, defines onclick button functionality
 */

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSpinner } from '@fortawesome/free-solid-svg-icons';

const Button = ({
  icon,
  size,
  text,
  buttonLoading,
  button,
  inlineStyle,
  handleOnClick,
}) => {
  return (
    <div className={`Button-${button}`} style={inlineStyle}>
      <button
        onClick={!handleOnClick ? null : handleOnClick}
        disabled={buttonLoading}
      >
        <FontAwesomeIcon
          spin={buttonLoading && true}
          icon={buttonLoading ? faSpinner : icon}
          size={size}
        />
        &nbsp;&nbsp;
        {buttonLoading ? 'Actualizando...' : text}
      </button>
    </div>
  );
};

export default Button;
