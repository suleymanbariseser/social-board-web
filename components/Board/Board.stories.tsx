import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import Board from './Board';
import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';
import { columns } from '../../constants/mocks/board';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Board',
  component: Board,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {
    color: { control: 'color' },
  },
} as ComponentMeta<typeof Board>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args

export const Default: ComponentStory<typeof Board> = (args) => (
  <DndProvider backend={HTML5Backend}>
    <Board {...args} />
  </DndProvider>
);

Default.args = {
  columns: columns,
};
