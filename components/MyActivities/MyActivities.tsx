import { Grid, IconButton, List, ListItemButton, Paper, Typography } from '@mui/material';
import React from 'react';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';

const MyActivities = () => {
  return (
    <Grid item component={Paper}>
      <Grid container direction='row' alignItems='center'>
        <Grid item xs>
          <Typography variant='subtitle1' color='GrayText'>
            My Activities
          </Typography>
        </Grid>
        <Grid item>
          <IconButton onClick={console.log}>
            <MoreHorizIcon />
          </IconButton>
        </Grid>
      </Grid>
      <List sx={styles.list} disablePadding>
        <ListItemButton>My Group 1</ListItemButton>
        <ListItemButton>My Group 2</ListItemButton>
        <ListItemButton>My Group 3</ListItemButton>
      </List>
    </Grid>
  );
};

export default MyActivities;

const styles = {
  list: {
    mx: -3,
  },
};
