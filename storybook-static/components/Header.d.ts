export type HeaderType = 'default' | 'custom';
export interface HeaderProps {
    type?: HeaderType;
    text: string;
}
export declare const Header: (props: HeaderProps) => import("react/jsx-runtime").JSX.Element;
export default Header;
