import {
  Edit as EditIcon,
  Facebook,
  Instagram,
  LinkedIn,
  Twitter,
} from '@mui/icons-material';
import { Avatar, Grid, IconButton, Paper, Typography } from '@mui/material';
import React from 'react';
import HeroImage from '../HeroImage';
import LinkList from '../LinkList';

export interface ProfileHeaderProps {}

const ProfileHeader = () => {
  return (
    <Grid component={Paper} sx={styles.root} container direction='column'>
      <HeroImage
        fullName='Suleyman'
        imgSrc='https://media-exp1.licdn.com/dms/image/C4D16AQGPd3_gtbfl7w/profile-displaybackgroundimage-shrink_350_1400/0/1612646376814?e=1671667200&v=beta&t=Px31kh9JgoUpqKPk8EwW0GA_7kiA5Crii39jR9S8fRc'
      />
      <Grid sx={styles.container} container direction='column'>
        <Grid
          sx={styles.headerContainer}
          container
          direction='row'
          alignItems='flex-end'
          justifyContent='space-between'
        >
          <Grid item>
            <Avatar
              sx={styles.avatar}
              src='https://pbs.twimg.com/profile_images/1296496979623718912/Y7euqDXN_400x400.jpg'
              alt='image'
            />
          </Grid>
          <Grid item>
            <IconButton sx={styles.iconButton}>
              <EditIcon />
            </IconButton>
          </Grid>
        </Grid>
        <Grid sx={styles.headerBody} container direction='column'>
          <Grid item>
            <Typography sx={styles.fullName} variant='h4'>
              Barış Eser
            </Typography>
            <Typography
              sx={styles.username}
              variant='subtitle2'
              color='GrayText'
            >
              @suleymanbariseser
            </Typography>
          </Grid>
          <Grid sx={styles.description} item>
            <Typography variant='body1'>You talkin' me?</Typography>
          </Grid>
        </Grid>
        <LinkList
          links={[
            {
              icon: <Instagram />,
              link: 'https://www.instagram.com/suleymanbariseser/',
              preview: 'Instagram',
            },
            {
              icon: <Twitter />,
              link: 'https://twitter.com/XhalSolo/',
              preview: 'Twitter',
            },
            {
              icon: <LinkedIn />,
              link: 'https://www.linkedin.com/in/suleymanbariseser/',
              preview: 'Linkedin',
            },
            {
              icon: <Facebook />,
              link: 'https://www.facebook.com/profile.php?id=100009240172317',
              preview: 'Facebook',
            },
          ]}
        />
      </Grid>
    </Grid>
  );
};

export default ProfileHeader;

const styles = {
  root: {
    px: 0,
    pt: 0
  },
  container: {
    px: 4,
  },
  headerContainer: {
    marginTop: -16,
  },
  iconButton: {
    mb: 2,
  },
  avatar: {
    width: 135,
    height: 135,
    borderWidth: 5,
    borderStyle: 'solid',
    borderColor: 'white',
  },
  headerBody: {
    mt: 2,
  },
  fullName: {},
  username: {},
  description: {
    py: 2,
  },
};
