import { Grid, Typography } from '@mui/material';
import { FC } from 'react';
import StyleMap from '../../types/StyleMap';
import Menu from '../Menu';

export type SidebarSxKeys = 'root' | 'logo';

export interface SidebarProps {}

const Sidebar: FC<SidebarProps> = ({}) => {
  return (
    <Grid sx={styles.root} container direction='column'>
      <Grid item>
        <Typography sx={styles.logo} variant='h1'>
          LOGO
        </Typography>
      </Grid>
      <Grid item>
        <Menu />
      </Grid>
    </Grid>
  );
};

export default Sidebar;

const styles: StyleMap<SidebarSxKeys> = {
  root: {
    background: 'linear-gradient(to left bottom, #FFFFFF, #ECEFF7)',
    height: '100%',
    minWidth: 275
  },
  logo: {
    mb: 5,
    px: 8,
    py: 4,
  },
};
