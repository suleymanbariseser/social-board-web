import { List } from '@mui/material';
import { FC } from 'react';
import LinkItem, { LinkType } from './LinkItem';

export interface LinkListProps {
  links: LinkType[];
}

const LinkList: FC<LinkListProps> = ({ links = [] }) => {
  return (
    <List disablePadding sx={styles.root}>
      {links.map((link) => (
        <LinkItem key={link.link} link={link} />
      ))}
    </List>
  );
};

export default LinkList;

const styles = {
  root: {
    display: 'flex',
    flexDirection: 'row',
    gap: 10,
  },
};
