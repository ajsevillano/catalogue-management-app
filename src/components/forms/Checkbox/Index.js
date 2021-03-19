import React from 'react';

function Checkbox({ status, handleCheckBox }) {
  return (
    <>
      <label className="switch">
        <input
          type="checkbox"
          name="activo"
          defaultChecked={status === 1 && true}
          onChange={(e) => handleCheckBox(e)}
        />
        <div className="slider round"></div>
      </label>
    </>
  );
}

export default Checkbox;
