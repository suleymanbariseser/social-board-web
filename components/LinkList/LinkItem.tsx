import { ListItem, ListItemIcon, ListItemText } from '@mui/material';
import React, { FC, ReactNode } from 'react';

export type LinkType = {
  icon: ReactNode;
  preview: string;
  link: string;
};

export interface LinkItemProps {
  link: LinkType;
}
const LinkItem: FC<LinkItemProps> = ({ link }) => {
  return (
    <ListItem
      sx={styles.root}
      key={link.link}
      disableGutters
      disablePadding
      component='a'
      href={link.link}
      target='_blank'
      rel='noreferrer noopener'
    >
      <ListItemIcon sx={styles.icon} key={`${link.link}-icon`}>
        {link.icon}
      </ListItemIcon>
      <ListItemText key={`${link.link}-text`}>{link.preview}</ListItemText>
    </ListItem>
  );
};

export default LinkItem;

const styles = {
  root: {
    width: 'max-content',
    flex: 'unset',
    color: 'black'
  },
  icon: {
    minWidth: 0,
    paddingRight: 2,
    color: 'primary.main',
  },
};
