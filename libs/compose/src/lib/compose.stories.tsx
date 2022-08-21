import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Compose } from './compose';

export default {
  component: Compose,
  title: 'Compose',
} as ComponentMeta<typeof Compose>;

const Template: ComponentStory<typeof Compose> = (args) => (
  <Compose {...args} />
);

export const Primary = Template.bind({});
Primary.args = {};
