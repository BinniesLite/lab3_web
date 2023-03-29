import React, { useContext } from 'react';
import { ScrollMenu, VisibilityContext } from 'react-horizontal-scrolling-menu';
import { Box, Typography } from '@mui/material';

import CustomCard from './CustomCard';

import { Work } from '../constants/work';

// import RightArrowIcon from '../assets/icons/right-arrow.svg';
// import LeftArrowIcon from '../assets/icons/left-arrow.svg';

import { Link } from 'react-router-dom';

import useDrag from '../hooks/useDrag';

type scrollVisibilityApiType = React.ContextType<typeof VisibilityContext>;


interface HorizontalScrollbarProps {
  works: Work[];
}



const HorizontalScrollbar = ({ works }: HorizontalScrollbarProps) => {
  const { dragStart, dragStop, dragMove, dragging } = useDrag();
  const handleDrag = ({ scrollContainer }: scrollVisibilityApiType) => (
    ev: React.MouseEvent
  ) =>
    dragMove(ev, (posDiff) => {
      if (scrollContainer.current) {
        scrollContainer.current.scrollLeft += posDiff;
      }
    });

  const [selected, setSelected] = React.useState<string>("");
  const handleItemClick = (itemId: string) => () => {
    if (dragging) {
      return false;
    }
    setSelected(selected !== itemId ? itemId : "");
  };
  return (
  <div onMouseLeave={dragStop}>
    <ScrollMenu
      onMouseDown={() => dragStart}
      onMouseUp={() => dragStop}
      onMouseMove={handleDrag}
    >
      {works.map((work, key) => (
        <Box key={key}>
        <CustomCard id={work.id} title={work.name} description={work.description} date={work.date} img={work.image}  />
      </Box>
      ))}
    </ScrollMenu>
  </div>)
};

export default HorizontalScrollbar;