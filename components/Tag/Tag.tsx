import { ButtonBase, Typography } from '@mui/material';
import React, { FC } from 'react';
import StyleMap from '../../types/StyleMap';
import isColorDark from '../../utils/isColorDark';
import mergeStyles from '../../utils/mergeStyles';

export type TagSxKeys = 'root' | 'text';

export interface TagProps {
  id: string;
  color: string;
  text: string;
  styles?: StyleMap<TagSxKeys>;
}

const Tag: FC<TagProps> = ({ id, color, text, styles: newStyles = {} }) => {
  const isDark = isColorDark(color);

  const styles = mergeStyles(baseStyles, newStyles, {
    root: { backgroundColor: color, color: isDark ? 'white' : 'dark' },
  });

  return (
    <ButtonBase sx={styles.root}>
      <Typography sx={styles.text} variant='body2'>
        {text}
      </Typography>
    </ButtonBase>
  );
};

export default Tag;

const baseStyles: StyleMap<TagSxKeys> = {
  root: {
    py: 1,
    px: 3,
    borderRadius: 999,
    width: 'max-content',
  },
  text: {},
};
