import { Grid } from '@mui/material';
import { FC, ReactNode } from 'react';
import Sidebar from '../../components/Sidebar';
import StyleMap from '../../types/StyleMap';
import mergeStyles from '../../utils/mergeStyles';

export type LayoutSxKeys = 'root' | 'content';
export interface LayoutProps {
  children?: ReactNode;
  styles?: StyleMap<LayoutSxKeys>
}

const Layout: FC<LayoutProps> = ({ children, styles: newStyles = {} }) => {
  const styles = mergeStyles(baseStyles, newStyles)
  return (
    <Grid sx={styles.root} container direction='row'>
      <Grid item>
        <Sidebar />
      </Grid>
      <Grid sx={styles.content} item xs>
        {children}
      </Grid>
      <Grid item></Grid>
    </Grid>
  );
};

export default Layout;

const baseStyles: StyleMap<LayoutSxKeys> = {
  root: {
    minHeight: '100vh',
  },
  content: {
    backgroundColor: 'background.default',
    p: 4,
  },
};
