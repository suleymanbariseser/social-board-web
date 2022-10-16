import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import BoardColumnContent from './BoardColumnContent';
import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';
import { columns } from '../../constants/mocks/board';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'BoardColumnContent',
  component: BoardColumnContent,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {
    color: { control: 'color' },
  },
} as ComponentMeta<typeof BoardColumnContent>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args

export const Default: ComponentStory<typeof BoardColumnContent> = (args) => (
  <DndProvider backend={HTML5Backend}>
    <BoardColumnContent {...args} />
  </DndProvider>
);

Default.args = {
  cards: columns[0].cards,
};
