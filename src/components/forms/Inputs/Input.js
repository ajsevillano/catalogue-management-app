/** Input UI Component
 * @param {string} text The type of input
 * @param {string} name The name of the input
 * @param {function} handleChange Function to handle the update on the state
 * @param {state} defaultValue Return the default value got from the state
 */

import React from 'react';

const Input = ({ text, name, handleChange, defaultValue, required }) => {
  return (
    <input
      type={text}
      name={name}
      onChange={(e) => handleChange(e)}
      defaultValue={defaultValue}
      required={required}
    />
  );
};

export default Input;
