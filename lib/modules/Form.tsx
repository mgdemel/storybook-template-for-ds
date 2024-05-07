import Button from '../components/Button';
import Input from '../components/Input';
import TextSection from '../components/TextSection';

export interface FormProps {
  heading: string;
  textBody: string;
  buttonLabel: string;
}

export const Form = (props: FormProps) => {
  const { heading, textBody, buttonLabel } = props;
  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100vh',
        width: '100%',
        padding: '64px 0px',
      }}
    >
      <div style={{ textAlign: 'center' }}>
        <TextSection title={heading} content={textBody} />
        <div
          style={{
            marginBottom: '32px',
          }}
        >
          <Input value=" Email address"/>
        </div>
        <div>
          <Button label={buttonLabel} type={'primary'} />
        </div>
      </div>
    </div>
  );
};

export default Form;
