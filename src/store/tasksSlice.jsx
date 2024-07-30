import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  tasks: [],
  searchTerm: '', // Add search term to the state
};

const tasksSlice = createSlice({
  name: 'tasks',
  initialState,
  reducers: {
    addTask: (state, action) => {
      state.tasks.push({ 
        id: Date.now().toString(), 
        title: action.payload.title, 
        description: action.payload.description, 
        status: action.payload.status 
      });
    },
    updateTask: (state, action) => {
      const { id, status } = action.payload;
      const task = state.tasks.find(task => task.id === id);
      if (task) {
        task.status = status;
      }
    },
    setSearchTerm: (state, action) => {
      state.searchTerm = action.payload;
    },
  },
});

// Selector to filter tasks based on the search term
export const selectFilteredTasks = (state, status) => {
  const searchTerm = state.tasks.searchTerm.toLowerCase();
  return state.tasks.tasks
    .filter(task => task.status === status)
    .filter(task => 
      task.title.toLowerCase().includes(searchTerm) || 
      task.description.toLowerCase().includes(searchTerm)
    );
};

export const { addTask, updateTask, setSearchTerm } = tasksSlice.actions;
export default tasksSlice.reducer;
