import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import BoardColumnHeader from './BoardColumnHeader';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'BoardColumnHeader',
  component: BoardColumnHeader,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {
    color: { control: 'color' },
  }
} as ComponentMeta<typeof BoardColumnHeader>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args

export const Default: ComponentStory<typeof BoardColumnHeader> = (args) => <BoardColumnHeader {...args} />

Default.args = {
    title: 'Todo'
}