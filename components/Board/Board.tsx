import { Grid } from '@mui/material';
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
    <DndProvider backend={HTML5Backend}>
      <Grid sx={styles.root} container direction='row'>
        {columns.map((column) => (
          <Grid sx={styles.column} key={`${column.id}-Grid`} item xs>
            <BoardColumn key={`${column.id}-BoardColumn`} {...column} />
          </Grid>
        ))}
      </Grid>
    </DndProvider>
  );
};

export default Board;

const styles: StyleMap<BoardSxKeys> = {
  root: {},
  column: {
    px: 3,
  },
};
