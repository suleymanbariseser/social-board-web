import {
  Box,
  ButtonBase,
  Grid,
  SxProps,
  Theme,
  Typography,
} from '@mui/material';
import { FC, ReactNode, useRef } from 'react';
import { useDrag, useDrop, XYCoord } from 'react-dnd';
import StyleMap from '../../types/StyleMap';
import mergeStyles from '../../utils/mergeStyles';
import Tag, { TagProps } from '../Tag';

interface DragItem {
  index: number;
  id: string;
}

export type BoardCardSxKeys = 'root' | 'icon' | 'tags';

export interface BoardCardProps {
  id: string;
  title: string;
  index: number;
  icon?: ReactNode;
  tags: TagProps[];
  styles?: StyleMap<BoardCardSxKeys>;
  onDrop?: (dragIndex: number, hoverIndex: number) => void;
}
const BoardCard: FC<BoardCardProps> = ({
  id,
  title,
  icon,
  tags,
  index,
  onDrop,
  styles: newStyles = {},
}) => {
  const ref = useRef<HTMLDivElement>(null);

  const [{ isDragging }, drag] = useDrag(
    () => ({
      type: 'card',
      item: () => ({
        id,
        index,
      }),
      collect: (monitor) => ({
        isDragging: monitor.isDragging(),
      }),
    }),
    []
  );

  const [{ handlerId }, drop] = useDrop<DragItem, void, { handlerId: any }>({
    accept: 'card',
    collect(monitor) {
      return {
        handlerId: monitor.getHandlerId(),
      };
    },
    hover(item: DragItem, monitor) {
      if (!ref.current) {
        return;
      }
      const dragIndex = item.index;
      const hoverIndex = index;

      // Don't replace items with themselves
      if (dragIndex === hoverIndex) {
        return;
      }

      // Determine rectangle on screen
      const hoverBoundingRect = ref.current?.getBoundingClientRect();

      // Get vertical middle
      const hoverMiddleY =
        (hoverBoundingRect.bottom - hoverBoundingRect.top) / 2;

      // Determine mouse position
      const clientOffset = monitor.getClientOffset();

      // Get pixels to the top
      const hoverClientY = (clientOffset as XYCoord).y - hoverBoundingRect.top;

      // Only perform the move when the mouse has crossed half of the items height
      // When dragging downwards, only move when the cursor is below 50%
      // When dragging upwards, only move when the cursor is above 50%

      // Dragging downwards
      if (dragIndex < hoverIndex && hoverClientY < hoverMiddleY) {
        return;
      }

      // Dragging upwards
      if (dragIndex > hoverIndex && hoverClientY > hoverMiddleY) {
        return;
      }

      // Time to actually perform the action
      onDrop?.(dragIndex, hoverIndex);

      // Note: we're mutating the monitor item here!
      // Generally it's better to avoid mutations,
      // but it's good here for the sake of performance
      // to avoid expensive index searches.
      item.index = hoverIndex;
    },
  });

  const styles = mergeStyles(baseStyles, newStyles, {
    root: {
      opacity: isDragging ? 0 : 1,
    },
  });

  drag(drop(ref));

  return (
    <Box
      ref={ref}
      onClick={console.log}
      sx={styles.root}
      data-handler-id={handlerId}
    >
      <Grid container direction='row'>
        {index}
        {icon && (
          <Grid sx={styles.icon} item>
            {icon}
          </Grid>
        )}
        <Grid item xs>
          <Typography variant='subtitle1'>{title}</Typography>
        </Grid>
      </Grid>
      <Grid sx={styles.tags} container direction='row' flexWrap='wrap'>
        {tags?.map((tag) => (
          <Tag key={tag.id} {...tag} />
        ))}
      </Grid>
    </Box>
  );
};

export default BoardCard;

const baseStyles: StyleMap<BoardCardSxKeys> = {
  root: {
    padding: 5,
    borderRadius: 2,
    // boxShadow: 'rgba(149, 157, 165, 0.2) 0px 8px 24px',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-start',
    textAlign: 'left',
    backgroundColor: 'background.paper',
  },
  icon: {
    pr: 2,
  },
  tags: {
    pt: 2,
    gap: 1,
  },
};
