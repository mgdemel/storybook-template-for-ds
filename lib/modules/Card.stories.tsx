import { Meta, Story } from '@storybook/react';
import Card, { CardProps } from './Card';

const meta: Meta<CardProps> = {
  title: 'Modules/Card',
  component: Card,
};

export default meta;

const Template: Story<CardProps> = (args) => <Card {...args} />;

export const Default = Template.bind({});
Default.args = {
  textSectionProps: {
    title: 'Default Title',
    content: 'Default content for the text section.',
  },
  buttonProps: {
    label: 'Click me',
    type: 'default',
    disabled: false,
  },
  logoProps: {
    src: 'lib/images/logo-one.svg',
    alt: 'Mimmit Koodaa Logo',
  },
};
