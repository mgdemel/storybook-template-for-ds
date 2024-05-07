import React from 'react';
export type InputType = 'default' | 'primary';
export interface InputProps {
    type?: InputType;
    label?: string;
    value?: string;
    disabled?: boolean;
    onChange?: (value: string) => void;
}
export declare const Input: React.FC<InputProps>;
export default Input;
