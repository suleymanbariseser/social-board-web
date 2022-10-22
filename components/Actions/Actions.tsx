import { Grid, IconButton, Paper } from '@mui/material';
import ViewAgendaIcon from '@mui/icons-material/ViewAgenda';

const Actions = () => {
  return (
    <Grid component={Paper} elevation={1} container direction='row' alignItems='center'>
      <Grid item xs>
        Filters will be here
      </Grid>
      <Grid item>
        <Grid container direction='row'>
          <IconButton>
            <ViewAgendaIcon sx={styles.active} />
          </IconButton>
          <IconButton>
            <ViewAgendaIcon sx={styles.board} />
          </IconButton>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default Actions;

const styles = {
  active: {
    color: 'primary.dark'
  },
  board: {
    rotate: '90deg',
  },
};
