import React from 'react';

function Checkbox({ id, status, handleCheckBox }) {
  return (
    <>
      <label className="switch">
        <input
          type="checkbox"
          name="activo"
          // id={`checkbox${id}`}
          defaultChecked={status == 1 ? true : false}
          onChange={(e) => handleCheckBox(e)}
        />
        <div className="slider round"></div>
      </label>
    </>
  );
}

export default Checkbox;
