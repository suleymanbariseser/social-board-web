import {
  Bookmark as BookmarkIcon,
  Home as HomeIcon,
  Message as MessageIcon,
  Person as PersonIcon,
  Settings as SettingsIcon,
  ChatBubbleRounded as ChatBubbleRoundedIcon,
} from '@mui/icons-material';
import {
  List,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Typography,
} from '@mui/material';
import { FC } from 'react';
import StyleMap from '../../types/StyleMap';
import mergeStyles from '../../utils/mergeStyles';

const menuList = [
  {
    Icon: HomeIcon,
    text: 'Home',
    link: '/home',
  },
  {
    Icon: ChatBubbleRoundedIcon,
    text: 'Messages',
    link: '/chat',
  },
  {
    Icon: PersonIcon,
    text: 'Profile',
    link: '/profile',
  },
  {
    Icon: BookmarkIcon,
    text: 'Saved Posts',
    link: '/favorites',
  },
  {
    Icon: SettingsIcon,
    text: 'Settings',
    link: '/settings',
  },
];

export type MenuContentSxKeys =
  | 'root'
  | 'itemRoot'
  | 'itemIcon'
  | 'itemText'
  | 'text';

export interface MenuContentProps {
  styles?: StyleMap<MenuContentSxKeys>;
}

const MenuContent: FC<MenuContentProps> = ({ styles: newStyles = {} }) => {
  const styles = mergeStyles(baseStyles, newStyles);
  const activeItem = menuList[0];

  return (
    <List sx={styles.root}>
      {menuList.map(({ Icon, link, text }) => (
        <ListItemButton
          disableGutters
          sx={styles.itemRoot}
          key={`${link}-ListItemButton`}
        >
          <ListItemIcon
            sx={styles.itemIcon}
            color='purple'
            key={`${link}-ListItemIcon`}
          >
            <Icon color={activeItem.link === link ? 'primary' : 'disabled'} />
          </ListItemIcon>
          <ListItemText sx={styles.itemText} key={`${link}-ListItemText`}>
            <Typography
              key={`${link}-Typography`}
              sx={styles.text}
              variant='body1'
              color={activeItem.link === link ? 'black' : 'GrayText'}
            >
              {text}
            </Typography>
          </ListItemText>
        </ListItemButton>
      ))}
    </List>
  );
};

export default MenuContent;

const baseStyles: StyleMap<MenuContentSxKeys> = {
  root: {},
  itemIcon: {
    minWidth: 45
  },
  itemRoot: {
    '&:hover': {
      bgcolor: 'white',
    },
  },
  itemText: {},
  text: {},
};
