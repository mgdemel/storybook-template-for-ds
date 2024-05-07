import { Meta, Story } from '@storybook/react';
import Hero, { HeroProps } from './Hero';

const meta: Meta<HeroProps> = {
  title: 'Modules/Hero',
  component: Hero,
};

export default meta;

const Template: Story<HeroProps> = (args) => <Hero {...args} />;

export const Default = Template.bind({});
Default.args = {};
