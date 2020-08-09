import React, { InputHTMLAttributes, SelectHTMLAttributes } from 'react';
import './style.css';
interface SelectProps extends SelectHTMLAttributes<HTMLSelectElement> {
  label: string;
  name: string; 
  options: Array<{
    value: string,
    label: string
  }>
}

const Select: React.FC<SelectProps> = ({label, options, name, ...rest}) => {
  return (
    <div className="input-block">
      <label htmlFor={name}>{label}</label>
      <select name={name} {...rest} id={name}>
        <option value="" disabled selected hidden>Selecione uma opção...</option>
        {options.map(option=> {
          return <option value={option.value}>{option.label}</option>
        })}
      </select>
    </div>
  );
}

export default Select;