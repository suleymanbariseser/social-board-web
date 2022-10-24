import { Grid } from '@mui/material';
import { FC } from 'react';
import StyleMap from '../../types/StyleMap';
import MyActivities from '../MyActivities';
import MyFriends from '../MyFriends';

export type SidebarSxKeys = 'root' | 'listItemRoot' | 'logo';

export interface SidebarProps {}

const Sidebar: FC<SidebarProps> = ({}) => {
  return (
    <Grid sx={styles.root} container direction='column'>
      <MyActivities />
      <MyFriends />
    </Grid>
  );
};

export default Sidebar;

const styles: StyleMap<SidebarSxKeys> = {
  root: {
    backgroundColor: 'transparent',
    height: '100%',
    minWidth: 325,
    px: 4,
    gap: 4
  },
  logo: {
    mb: 5,
    px: 8,
    py: 4,
  },
  listItemRoot: {
    px: 8,
  },
};
