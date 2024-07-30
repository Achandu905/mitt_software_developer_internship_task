import React from 'react';
import { useDrag } from 'react-dnd';
import { Box, Typography } from '@mui/material';

const TaskCard = ({ task }) => {
  const [{ isDragging }, drag] = useDrag({
    type: 'TASK',
    item: { id: task.id },
    collect: (monitor) => ({
      isDragging: !!monitor.isDragging(),
    }),
  });

  return (
    <Box
      ref={drag}
      sx={{
        p: 2,
        mb: 1,
        borderRadius: 1,
        boxShadow: 2,
        backgroundColor: isDragging ? 'lavender' : 'lavender',
        cursor: 'move',
      }}
    >
      <Typography variant="h6" noWrap>
        {task.title}
      </Typography>
      <Typography variant="body2" noWrap>
        {task.description}
      </Typography>
    </Box>
  );
};

export default TaskCard;
