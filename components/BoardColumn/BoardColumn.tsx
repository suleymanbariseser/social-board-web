import { Grid } from '@mui/material';
import { FC } from 'react';
import BoardColumnContent, {
  BoardColumnContentProps,
} from '../BoardColumnContent';
import BoardColumnHeader, { BoardColumnHeaderProps } from '../BoardColumnHeader';

export interface BoardColumnProps {
  id: string;
  title?: BoardColumnHeaderProps['title'];
  headerStyles?: BoardColumnHeaderProps['styles'];
  contentStyles?: BoardColumnContentProps['styles'];
  cards?: BoardColumnContentProps['cards'];
}

const BoardColumn: FC<BoardColumnProps> = ({
  id,
  title,
  contentStyles,
  cards,
  headerStyles,
}) => {
  return (
    <Grid container direction='column'>
      <BoardColumnHeader styles={headerStyles} title={title} />
      <BoardColumnContent styles={contentStyles} cards={cards} />
    </Grid>
  );
};

export default BoardColumn;
