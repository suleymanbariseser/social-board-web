import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import BoardCard from './BoardCard';
import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';
import { tags } from '../../constants/mocks/board';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'BoardCard',
  component: BoardCard,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {
    icon: { type: 'string' },
  },
} as ComponentMeta<typeof BoardCard>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args

export const Default: ComponentStory<typeof BoardCard> = (args) => (
  <DndProvider backend={HTML5Backend}>
    <BoardCard {...args} />
  </DndProvider>
);

Default.args = {
  id: '134',
  title:
    'Write an article about how to create a React application from scratch',
  icon: 'icon',
  tags,
};
