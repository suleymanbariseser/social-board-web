import {
  Avatar,
  Grid,
  IconButton,
  List,
  ListItemAvatar,
  ListItemButton,
  ListItemText,
  Paper,
  Typography,
} from '@mui/material';
import React from 'react';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import { useQuery } from '@tanstack/react-query';

const fetcher = () =>
  fetch('https://randomuser.me/api/?results=20')
    .then((response) => response.json())
    .then(({ results }) =>
      results.map((item: any) => ({
        firstName: item.name.first,
        lastName: item.name.last,
        id: item.login.uuid,
        image: item.picture.thumbnail,
      }))
    );

const MyFriends = () => {
  const {
    isLoading,
    error,
    data: friends,
  } = useQuery(['my-friends'], fetcher, {
    suspense: false,
    initialData: [],
  });

  console.log(friends);

  return (
    <Grid item component={Paper}>
      <Grid container direction='row' alignItems='center'>
        <Grid item xs>
          <Typography variant='subtitle1' color='GrayText'>
            Friends
          </Typography>
        </Grid>
        <Grid item>
          <IconButton onClick={console.log}>
            <MoreHorizIcon />
          </IconButton>
        </Grid>
      </Grid>
      <List sx={styles.list} disablePadding>
        {friends?.map((user) => (
          <ListItemButton key={user.id} onClick={console.log}>
            <ListItemAvatar>
              <Avatar src={user.image} />
            </ListItemAvatar>
            <ListItemText>
              {[user.firstName, user.lastName].join(' ')}
            </ListItemText>
          </ListItemButton>
        ))}
      </List>
    </Grid>
  );
};

export default MyFriends;

const styles = {
  list: {
    mx: -3,
  },
};
