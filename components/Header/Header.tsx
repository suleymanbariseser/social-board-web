import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import {
  Avatar,
  Grid,
  Icon,
  IconButton,
  TextField,
  Typography,
} from '@mui/material';
import HomeIcon from '@mui/icons-material/Home';
import ExploreIcon from '@mui/icons-material/Explore';
import InboxIcon from '@mui/icons-material/Inbox';
import FavoriteIcon from '@mui/icons-material/Favorite';
import BookmarkIcon from '@mui/icons-material/Bookmark';
import NotificationsIcon from '@mui/icons-material/Notifications';

const pages = [
  { icon: HomeIcon, url: '/feed' },
  { icon: ExploreIcon, url: '/explore' },
  { icon: InboxIcon, url: '/inbox' },
  { icon: FavoriteIcon, url: '/activity' },
];
const Header = () => {
  return (
    <AppBar sx={styles.root} position='fixed'>
      <Toolbar sx={styles.toolbar} disableGutters>
        <Grid sx={styles.logo} item>
          <Typography color='black' variant='h3'>
            LOGO
          </Typography>
        </Grid>
        <Grid item xs>
          <Grid container direction='row'>
            <Grid item>
              {pages.map((page) => (
                <IconButton key={page.url}>
                  <page.icon key={`${page.url}-icon`} />
                </IconButton>
              ))}
            </Grid>
            <Grid item xs>
              <TextField variant='filled' placeholder='Search' fullWidth />
            </Grid>
          </Grid>
        </Grid>
        <Grid sx={styles.actions} item>
          <Grid container direction='row' justifyContent='flex-end'>
            <IconButton>
              <BookmarkIcon />
            </IconButton>
            <IconButton>
              <NotificationsIcon />
            </IconButton>
            <Avatar src='https://pbs.twimg.com/profile_images/1296496979623718912/Y7euqDXN_400x400.jpg' />
          </Grid>
        </Grid>
      </Toolbar>
    </AppBar>
  );
};
export default Header;

const styles = {
  root: {
    borderRadius: 0,
    backgroundColor: 'white',
    boxShadow: '0 1px 5px rgba(57, 63, 72, 0.3)',
  },
  toolbar: {
    minHeight: 'unset !important',
  },
  logo: {
    minWidth: 325,
  },
  actions: {
    minWidth: 325,
  },
};
