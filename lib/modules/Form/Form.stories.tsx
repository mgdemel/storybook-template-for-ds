import { Meta, Story } from '@storybook/react';
import Form, { FormProps } from './Form';

const meta: Meta<FormProps> = {
  title: 'Modules/Form',
  component: Form,
};

export default meta;

const Template: Story<FormProps> = (args) => <Form {...args} />;

export const Default = Template.bind({});
Default.args = {
  heading: 'Default Title',
  textBody: 'Default text body',
  buttonLabel: 'Default button',
};
