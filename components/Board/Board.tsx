import { Grid, Paper } from '@mui/material';
import { FC } from 'react';
import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';
import StyleMap from '../../types/StyleMap';
import BoardColumn, { BoardColumnProps } from '../BoardColumn';

export type BoardSxKeys = 'root' | 'column';

export interface BoardProps {
  columns: BoardColumnProps[];
  styles?: StyleMap<BoardSxKeys>;
}

const Board: FC<BoardProps> = ({ columns }) => {
  return (
    <Grid sx={styles.root} container direction='column'>
      <DndProvider backend={HTML5Backend}>
        <Grid sx={styles.root} container direction='row'>
          {columns.map((column) => (
            <Grid component={Paper} elevation={1} key={`${column.id}-Grid`} item xs>
              <BoardColumn key={`${column.id}-BoardColumn`} {...column} />
            </Grid>
          ))}
        </Grid>
      </DndProvider>
    </Grid>
  );
};

export default Board;

const styles: StyleMap<BoardSxKeys> = {
  root: {
    gap: 4
  },
  column: {
  },
};
