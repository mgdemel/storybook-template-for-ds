import React from 'react';
import './Input.css';

export type InputType = 'default' | 'primary';

export interface InputProps {
  type?: InputType;
  label?: string;
  value?: string;
  disabled?: boolean;
  onChange?: (value: string) => void;
}

export const Input: React.FC<InputProps> = ({ value = '', onChange, disabled = false, type = 'default', label }) => {
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    onChange?.(event.target.value);
  };

  const inputClasses = ['input', `input--${type}`, disabled ? 'disabled' : undefined].join(' ');

  return (
    <input
      title={label}
      placeholder={label}
      className={inputClasses}
      disabled={disabled}
      type="text"
      value={value}
      onChange={handleChange}
    />
  );
};

export default Input;
