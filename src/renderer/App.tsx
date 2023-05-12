import { MemoryRouter as Router, Routes, Route } from 'react-router-dom';
import { Button, CssBaseline } from '@mui/material';
import '@fontsource/open-sans';
import '@fontsource/open-sans/800.css';
import '@fontsource/open-sans/600.css';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { SiMyanimelist } from 'react-icons/si';
import icon from '../../assets/icon.svg';
import './App.css';
import { Navbar } from './components/Navbar';
import { Home } from './pages/Home';
import { AnimeList } from './pages/AnimeList';

const queryClient = new QueryClient();

export default function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <Router>
        <CssBaseline />
        <Navbar />
        <div>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/anime-list" element={<AnimeList />} />
          </Routes>
        </div>
      </Router>
    </QueryClientProvider>
  );
}
