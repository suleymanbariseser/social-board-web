import { Grid } from '@mui/material';
import { Box } from '@mui/system';
import { FC, ReactNode } from 'react';
import Header from '../../components/Header';
import Sidebar from '../../components/Sidebar';
import StyleMap from '../../types/StyleMap';
import mergeStyles from '../../utils/mergeStyles';

export type LayoutSxKeys = 'root' | 'container' | 'content';
export interface LayoutProps {
  children?: ReactNode;
  styles?: StyleMap<LayoutSxKeys>;
}

const Layout: FC<LayoutProps> = ({ children, styles: newStyles = {} }) => {
  const styles = mergeStyles(baseStyles, newStyles);
  return (
    <Box sx={styles.root}>
      <Header />
      <Grid sx={styles.container} container direction='row'>
        <Grid item>
          <Sidebar />
        </Grid>
        <Grid sx={styles.content} item xs>
          {children}
        </Grid>
        <Grid item></Grid>
      </Grid>
    </Box>
  );
};

export default Layout;

const baseStyles: StyleMap<LayoutSxKeys> = {
  root: {
    minHeight: '100vh',
    backgroundColor: 'background.default',
  },
  container: {
    paddingTop: 20,
  },
  content: {},
};
