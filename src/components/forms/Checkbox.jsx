import React from 'react';

function Checkbox({ id, status }) {
  return (
    <>
      <label className="switch">
        <input
          type="checkbox"
          // id={`checkbox${id}`}
          // defaultChecked={status == 1 ? true : false}
        />
        <div className="slider round"></div>
      </label>
    </>
  );
}

export default Checkbox;
