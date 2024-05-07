import Button from '../components/Button';
import Header from '../components/Header';
import TextSection from '../components/TextSection';

export interface FormProps {
  heading?: string;
  textBody?: string;
  inputs: [];
  buttonLabel: string;
}

export const Form = (props: FormProps) => {
  const { heading, textBody, inputs, buttonLabel } = props;
  return (
    <div>
      {heading && <Header text={heading} />}
      {textBody && <TextSection title={textBody} content={'Text area'} />}
      {inputs.map((e) => e)}
      <Button label={buttonLabel} type={'default'} />
    </div>
  );
};

export default Form;
