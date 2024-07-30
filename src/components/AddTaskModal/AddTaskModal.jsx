import React, { useState } from 'react';
import { Modal, Box, Button, TextField } from '@mui/material';
import { useDispatch } from 'react-redux';
import { addTask } from '../../store/tasksSlice';

const AddTaskModal = ({ open, handleClose }) => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const dispatch = useDispatch();

  const handleSubmit = () => {
    dispatch(addTask({ id: Date.now().toString(), title, description, status: 'To Do' }));
    handleClose();
  };

  return (
    <Modal open={open} onClose={handleClose}>
      <Box
        sx={{
          padding: 2,
          backgroundColor: 'white',
          margin: 'auto',
          marginTop: '10%',
          maxWidth: 400,
          borderRadius:'10px',
          transition: 'background-color 0.3s ease, box-shadow 0.3s ease',
          
        }}
      >
        <TextField
          fullWidth
          margin="normal"
          label="Task Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <TextField
          fullWidth
          margin="normal"
          label="Task Description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
        <Button
          variant="contained"
          onClick={handleSubmit}
          sx={{
            mt: 2, 
            backgroundColor: '#FAE6FA', 
            color: 'black', 
            '&:hover': {
              backgroundColor: '#E8C7E5', 
            },
            '&:active': {
              backgroundColor: '#E8C7E5', 
            },
          }}
        >
          Add Task
        </Button>
      </Box>
    </Modal>
  );
};

export default AddTaskModal;
