export type ButtonType = 'default' | 'primary';
export interface ButtonProps {
    type?: ButtonType;
    label?: string;
    disabled?: boolean;
    onClick?: () => void;
}
export declare const Button: (props: ButtonProps) => import("react/jsx-runtime").JSX.Element;
export default Button;
