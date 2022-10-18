import { Grid, Typography } from '@mui/material';
import StyleMap from '../../types/StyleMap';
import MenuContent from '../MenuContent';

export type MenuSxKeys = 'root' | 'title' | 'listItemRoot';

const Menu = () => {
  return (
    <Grid sx={styles.root} container direction='column'>
      <Typography sx={styles.title} variant='h6'>
        Menu
      </Typography>
      <MenuContent
        styles={{
          itemRoot: styles.listItemRoot,
        }}
      />
    </Grid>
  );
};

export default Menu;

const styles: StyleMap<MenuSxKeys> = {
  root: {},
  title: {
    px: 8,
  },
  listItemRoot: {
    px: 8,
  },
};
