import React from 'react';

function Checkbox({ id, status }) {
  return (
    <>
      <label className="switch" htmlFor={`checkbox${id.id}`}>
        <input
          type="checkbox"
          id={`checkbox${id}`}
          defaultChecked={status == 1 ? true : false}
        />
        <div className="slider round"></div>
      </label>
    </>
  );
}

export default Checkbox;
