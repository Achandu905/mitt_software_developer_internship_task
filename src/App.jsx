import React, { useState } from 'react';
import KanbanBoard from './components/KanbanBoard/KanbanBoard';
import AddTaskModal from './components/AddTaskModal/AddTaskModal';
import SearchBar from './components/SearchBar/SearchBar';
import { Fab, Card, CardContent } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import { Provider } from 'react-redux';
import store from './store/store';

const App = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleOpenModal = () => setIsModalOpen(true);
  const handleCloseModal = () => setIsModalOpen(false);

  return (
    <Provider store={store}>
      <div className="app-container">
        <Card className="card-container">
          <CardContent>
            <div className="search-bar-container">
              <SearchBar />
            </div>
            <KanbanBoard />
            <Fab 
              color="primary" 
              aria-label="add" 
              onClick={handleOpenModal} 
              style={{ position: 'fixed', bottom: 16, right: 16 }}
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
              <AddIcon />
            </Fab>
            <AddTaskModal open={isModalOpen} handleClose={handleCloseModal} />
          </CardContent>
        </Card>
      </div>
    </Provider>
  );
};

export default App;
