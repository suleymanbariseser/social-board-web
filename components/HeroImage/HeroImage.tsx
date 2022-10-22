import { Box, Grid } from '@mui/material';
import Image from 'next/image';
import React, { FC } from 'react';
import StyleMap from '../../types/StyleMap';

export type HeroImageSxKeys = 'root' | 'image';

export interface HeroImageProps {
  imgSrc?: string;
  color?: string;
  fullName?: string;
}

const HeroImage: FC<HeroImageProps> = ({ color, imgSrc, fullName }) => {
  return (
    <Grid sx={styles.root} container direction='row'>
      {imgSrc && (
        <Box
          sx={styles.image}
          component={Image}
          src={imgSrc}
          alt={fullName}
          layout='fill'
        />
      )}
    </Grid>
  );
};

export default HeroImage;

const styles: StyleMap<HeroImageSxKeys> = {
  root: {
    height: [100, 200],
    backgroundColor: 'sred',
    position: 'relative',
  },
  image: {
    objectFit: 'cover'
  },
};
