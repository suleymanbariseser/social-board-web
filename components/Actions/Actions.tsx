import { Grid, IconButton, Paper } from '@mui/material';
import ViewAgendaIcon from '@mui/icons-material/ViewAgenda';
import useProfileStore from '../../store/profile';

const Actions = () => {
  const [viewType, setViewType] = useProfileStore((state) => [state.viewType, state.setViewType]);

  return (
    <Grid
      component={Paper}
      elevation={1}
      container
      direction='row'
      alignItems='center'
    >
      <Grid item xs>
        Filters will be here
      </Grid>
      <Grid item>
        <Grid container direction='row'>
          <IconButton onClick={() => setViewType('card')}>
            <ViewAgendaIcon sx={[viewType === 'card' && styles.active]} />
          </IconButton>
          <IconButton onClick={() => setViewType('board')}>
            <ViewAgendaIcon
              sx={[styles.board, viewType === 'board' && styles.active]}
            />
          </IconButton>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default Actions;

const styles = {
  active: {
    color: 'primary.dark',
  },
  board: {
    rotate: '90deg',
  },
};
