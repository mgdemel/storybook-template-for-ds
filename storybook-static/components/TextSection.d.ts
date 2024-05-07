export type TextSectionType = 'title' | 'content';
export interface TextSectionProps {
    type?: TextSectionType;
    title: string;
    content: string;
}
export declare const TextSection: (props: TextSectionProps) => import("react/jsx-runtime").JSX.Element;
export default TextSection;
