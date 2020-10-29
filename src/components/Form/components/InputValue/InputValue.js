import React from 'react';

const InputValue = ({ label, value, onInputChange, step, min, max }) => {
  return (
    <div className="input-field col s12">
      <input
        type="number"
        className="validate"
        value={value}
        onChange={onInputChange}
        min={min}
        max={max}
        step={step}
      />
      <label className="active">{label}</label>
    </div>
  );
};

export default InputValue;
