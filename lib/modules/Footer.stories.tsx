import { Meta, Story } from '@storybook/react';
import Footer, { FooterProps } from './Footer';

const meta: Meta<FooterProps> = {
  title: 'Modules/Footer',
  component: Footer,
};

export default meta;

const Template: Story<FooterProps> = (args) => <Footer {...args} />;

export const Default = Template.bind({});
Default.args = {};
