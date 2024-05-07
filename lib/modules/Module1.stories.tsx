import { Meta, Story } from '@storybook/react';
import Module1, { Module1Props } from './Module1';

const meta: Meta<Module1Props> = {
  title: 'Modules/Module1',
  component: Module1,
};

export default meta;

const Template: Story<Module1Props> = (args) => <Module1 {...args} />;

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
