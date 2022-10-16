import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import Tag from './Tag';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Tag',
  component: Tag,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {
    color: { control: 'color' },
  }
} as ComponentMeta<typeof Tag>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args

export const Default: ComponentStory<typeof Tag> = (args) => <Tag {...args} />

Default.args = {
    id: '134',
    color: '#690602',
    text: 'abc'
}