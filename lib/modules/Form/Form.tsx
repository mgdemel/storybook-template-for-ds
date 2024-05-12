import Button from '../../components/Button/Button';
import Input from '../../components/Input/Input';
import TextSection from '../../sections/TextSection/TextSection';
import './Form.css'

export interface FormProps {
  heading: string;
  textBody: string;
  buttonLabel: string;
}

export const Form = (props: FormProps) => {
  const { heading, textBody, buttonLabel } = props;
  return (
    <div className='form' style={{textAlign: 'center'}}>
      <TextSection title={heading} content={textBody} />
      <Input label="Email address"/>
      <div>
        <Button label={buttonLabel} type={'default'} />
      </div>
    </div>
  );
};

export default Form;
