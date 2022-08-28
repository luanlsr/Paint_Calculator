import React from 'react';
import './style.css';

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  type: string;
  placeholder?: string;
  id: string;
  label: string;
  value: number;
  name: string;
  handleChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

export const Input: React.FC<InputProps> = ({
  type,
  placeholder,
  id,
  label,
  value,
  name,
  handleChange,
  ...props
}) => {
  return (
    <div className='input-container'>
      <label htmlFor={id}>{label}</label>
      <input
        {...props}
        id={id}
        type={type}
        min='0'
        placeholder={placeholder}
        value={value}
        name={name}
        onChange={handleChange}
      />
    </div>
  );
};
