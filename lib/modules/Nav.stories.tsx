import { Meta, Story } from '@storybook/react';
import Nav, { NavProps } from './Nav';

const meta: Meta<NavProps> = {
  title: 'Modules/Nav',
  component: Nav,
};

export default meta;

const Template: Story<NavProps> = (args) => <Nav {...args} />;

export const Default = Template.bind({});
Default.args = {};
