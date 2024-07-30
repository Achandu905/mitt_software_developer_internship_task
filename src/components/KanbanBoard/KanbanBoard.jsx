import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { updateTask, selectFilteredTasks } from '../../store/tasksSlice';
import TaskColumn from '../TaskColumn/TaskColumn';
import { Box, Grid } from '@mui/material';

const KanbanBoard = () => {
  const dispatch = useDispatch();
  const searchTerm = useSelector((state) => state.tasks.searchTerm);

  const handleDropTask = (taskId, newStatus) => {
    dispatch(updateTask({ id: taskId, status: newStatus }));
  };

  const getTasksByStatus = (status) => 
    selectFilteredTasks({ tasks: { tasks: useSelector((state) => state.tasks.tasks), searchTerm } }, status);

  return (
    <Box sx={{ flexGrow: 1, padding: 2 }}>
      <Grid container spacing={2} alignItems="flex-start">
        {['To Do', 'In Progress', 'Peer Review', 'Done'].map((status) => (
          <Grid item xs={12} sm={6} md={3} key={status}>
            <TaskColumn
              status={status}
              tasks={getTasksByStatus(status)}
              onDropTask={handleDropTask}
            />
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default KanbanBoard;
