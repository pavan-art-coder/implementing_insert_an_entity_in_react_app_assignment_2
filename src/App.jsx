
import React from 'react';
import { BrowserRouter as  Router,Routes, Route  } from 'react-router-dom';
import Dashboard from './components/Dashboard';
import Movie from './Pages/Movie';

const App = () => {
  return (
    <>
     <Router>
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/movie" element={<Movie/>}/>
        </Routes>
      </Router>

  </>
      
  );
};

export default App;
