import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { CssBaseline, Box } from '@mui/material';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import AnimeList from './pages/AnimeList';
import './App.css';

function App() {
  return (
    <Router>
      <CssBaseline />
      <Navbar />
      <Box className="main-content">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/anime-list" element={<AnimeList />} />
        </Routes>
      </Box>
    </Router>
  );
}

export default App;
