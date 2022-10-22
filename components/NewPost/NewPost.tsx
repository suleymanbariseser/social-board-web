import { Avatar, Grid, Paper, TextField } from '@mui/material';
import StyleMap from '../../types/StyleMap';

export type NewPostSxKeys = 'root' | 'container' | 'avatar' | 'input';
const NewPost = () => {
  return (
    <Grid sx={styles.root} container direction='column'>
      <Grid sx={styles.container} container direction='row'>
        <Grid item>
          <Avatar sx={styles.avatar} src='https://mui.com/static/images/avatar/1.jpg' />
        </Grid>
        <Grid item xs>
          <TextField sx={styles.input} variant='filled' placeholder='Create a goal' fullWidth />
        </Grid>
      </Grid>
    </Grid>
  );
};

export default NewPost;

const styles: StyleMap<NewPostSxKeys> = {
  root: {
    padding: 2
  },
  avatar: {
    marginRight: 4,
  },
  input: {},
  container: {}
};
