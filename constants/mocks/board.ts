export const tags = [
  { id: '1', color: '#fc0303', text: 'Netflix' },
  { id: '2', color: '#fcba03', text: 'Google' },
  { id: '3', color: '#1e28e6', text: 'Travel' },
  { id: '4', color: '#eb34d5', text: 'Work' },
  { id: '5', color: '#0e3138', text: 'Study' },
  { id: '6', color: '#2dba6f', text: 'Skill' },
];

export const columns = [
  {
    id: 'todo',
    title: 'TODO',
    cards: [
      {
        id: '100',
        tags: [tags[0], tags[2]],
        title: 'Create a Backend Project about WebSockets',
      },
      {
        id: '101',
        tags: [tags[1], tags[3]],
        title: 'Learn a new Backend Framework',
      },
      {
        id: '102',
        tags: [tags[4], tags[5]],
        title:
          'Write an article about how to create a React application from scratch',
      },
      {
        id: '103',
        tags: [tags[1], tags[3]],
        title: 'Read Cracking Coding Interview Book',
      },
    ],
  },
  {
    id: 'in_progress',
    title: 'IN PROGRESS',
    cards: [
      {
        id: '104',
        tags: [tags[2]],
        title: 'Learn at least one Frontend Framework',
      },
      {
        id: '105',
        tags,
        title: 'Be a better problem solver',
      },
    ],
  },
  {
    id: 'done',
    title: 'DONE',
    cards: [
      {
        id: '106',
        tags: [tags[5]],
        title: 'Check popular libraries to see how they are coding',
      },
      {
        id: '107',
        tags: [tags[0], tags[1]],
        title: 'Move to a different country',
      },
    ],
  },
];
