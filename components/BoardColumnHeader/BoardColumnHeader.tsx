import { Grid, Typography } from '@mui/material';
import { FC } from 'react';
import StyleMap from '../../types/StyleMap';
import mergeStyles from '../../utils/mergeStyles';

export type BoardColumnHeaderSxKeys = 'root' | 'title' | 'settings';

export interface BoardColumnHeaderProps {
  title?: string;
  styles?: StyleMap<BoardColumnHeaderSxKeys>;
}

const BoardColumnHeader: FC<BoardColumnHeaderProps> = ({
  title = 'TODO',
  styles: newStyles = {},
}) => {
  const styles = mergeStyles(baseStyles, newStyles);

  return (
    <Grid sx={styles.root} container direction='row'>
      <Grid item xs>
        <Typography variant='h3' color='black'>
          {title}
        </Typography>
      </Grid>
      <Grid item>
        <Typography variant='body1'>settings</Typography>
      </Grid>
    </Grid>
  );
};

export default BoardColumnHeader;

const baseStyles: StyleMap<BoardColumnHeaderSxKeys> = {
  root: {
    paddingBottom: 2
  },
  settings: {},
  title: {},
};
