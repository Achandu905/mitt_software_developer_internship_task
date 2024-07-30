import React from 'react';
import { useDrop } from 'react-dnd';
import TaskCard from '../TaskCard/TaskCard';
import { Box, Typography } from '@mui/material';

const TaskColumn = ({ status, tasks, onDropTask }) => {
  const [{ isOver }, drop] = useDrop({
    accept: 'TASK',
    drop: (item) => onDropTask(item.id, status),
    collect: (monitor) => ({
      isOver: !!monitor.isOver(),
    }),
  });

  return (
    <Box
      ref={drop}
      sx={{
        backgroundColor: isOver ? '#FAE6FA' : '#FAE6FA',
        borderRadius: 1,
        boxShadow: 1,
        p: 2,
        minHeight: '400px',
        transition: 'background-color 0.3s ease, box-shadow 0.3s ease',
        '&:hover': {
          backgroundColor: '#E8C7E5',
          boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)', 
        },
      }}
    >
      <Typography variant="h6" sx={{ mb: 2 }}>
        {status}
      </Typography>
      <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1 }}>
        {tasks.map((task) => (
          <TaskCard key={task.id} task={task} />
        ))}
      </Box>
    </Box>
  );
};

export default TaskColumn;
