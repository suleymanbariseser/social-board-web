import { Grid } from '@mui/material';
import { FC, useCallback, useEffect, useState } from 'react';
import { useDrop } from 'react-dnd';
import StyleMap from '../../types/StyleMap';
import mergeStyles from '../../utils/mergeStyles';
import BoardCard, { BoardCardProps } from '../BoardCard';

export type BoardColumnContentSxKeys = 'root';

export interface BoardColumnContentProps {
  cards?: Omit<BoardCardProps, 'index'>[];
  styles?: StyleMap<BoardColumnContentSxKeys>;
}

const BoardColumnContent: FC<BoardColumnContentProps> = ({
  cards: inheritedCards = [],
  styles: newStyles = {},
}) => {
  const styles = mergeStyles(baseStyles, newStyles);
  const [cards, setCards] = useState(inheritedCards);
  const [{ isOver }, drop] = useDrop(
    () => ({
      accept: 'card',
      drop: (item, monitor) => console.log(item, monitor),
      collect: (monitor) => ({
        isOver: !!monitor.isOver(),
      }),
    }),
    []
  );

  const moveCard = useCallback(
    (dragIndex: number, hoverIndex: number) => {
      const newCards = [...cards];

      const draggedItem = newCards.splice(dragIndex, 1)[0];

      newCards.splice(hoverIndex, 0, draggedItem);

      setCards(newCards);
    },
    [cards]
  );

  return (
    <Grid ref={drop} sx={styles.root} container direction='column'>
      {cards.map((card, index) => (
        <Grid key={`${card.id}-Grid`} item>
          <BoardCard
            key={`${card.id}-BoardCard`}
            {...card}
            index={index}
            onDrop={moveCard}
          />
        </Grid>
      ))}
    </Grid>
  );
};

export default BoardColumnContent;

const baseStyles: StyleMap<BoardColumnContentSxKeys> = {
  root: {
    gap: 4,
  },
};
