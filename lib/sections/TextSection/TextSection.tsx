export type TextSectionType = 'title' | 'content';

export interface TextSectionProps {
  type?: TextSectionType;
  title: string;
  content: string;
}

export const TextSection = (props: TextSectionProps) => {
  const { type, title, content } = props;

  const textSectionClasses = ['text-section', `text-section--${type}`].join(' ');

  return (
    <div className={textSectionClasses}>
      <h2 className="text-section-title">{title}</h2>
      <p className="body2 text-section-paragraph">{content}</p>
    </div>
  );
};

export default TextSection;
