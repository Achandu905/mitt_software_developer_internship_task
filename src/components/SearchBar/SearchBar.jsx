import React from 'react';
import { TextField, InputAdornment } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import { useDispatch, useSelector } from 'react-redux';
import { setSearchTerm } from '../../store/tasksSlice';

const SearchBar = () => {
  const dispatch = useDispatch();
  const searchTerm = useSelector((state) => state.tasks.searchTerm);

  const handleSearch = (event) => {
    dispatch(setSearchTerm(event.target.value));
  };

  return (
    <TextField
      fullWidth
      margin="normal"
    //   label="Search Tasks"
      placeholder='Search Task'
      value={searchTerm}
      onChange={handleSearch}
      InputProps={{
        startAdornment: (
          <InputAdornment position="start">
            <SearchIcon />
          </InputAdornment>
        ),
      }}
      sx={{
        width: '100%', 
        borderRadius: 25,
        border: '1px solid #ccc', 
        '& .MuiOutlinedInput-root': {
          borderRadius: 25,
        },
      }}
    />
  );
};

export default SearchBar;
