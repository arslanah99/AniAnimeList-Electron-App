import { MemoryRouter as Router, Routes, Route } from 'react-router-dom';
import { Button, CssBaseline } from '@mui/material';
import '@fontsource/open-sans';
import '@fontsource/open-sans/800.css';
import '@fontsource/open-sans/600.css';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { SiMyanimelist } from 'react-icons/si';
import { createTheme } from '@mui/material';
import { ThemeProvider } from '@emotion/react';
import icon from '../../assets/icon.svg';
import './App.css';
import { Navbar } from './components/Navbar';
import { Home } from './pages/Home';
import { AnimeList } from './pages/AnimeList';
import { useEffect, useState } from 'react';

const queryClient = new QueryClient();

export default function App() {
  const [isDarkMode, setIsDarkMode] = useState(true);

  const toggleTheme = () => {
    setIsDarkMode((prevMode) => !prevMode);
  };

  useEffect(() => {
    const storedDarkMode = localStorage.getItem('isDarkMode');
    if (storedDarkMode !== null) {
      setIsDarkMode(JSON.parse(storedDarkMode));
    }
  }, []);

  const theme = createTheme({
    palette: {
      mode: isDarkMode ? 'dark' : 'light',
    },
  });

  return (
    <ThemeProvider theme={theme}>
      <QueryClientProvider client={queryClient}>
        <Router>
          <CssBaseline />
          <Navbar toggleTheme={toggleTheme} isDarkMode={isDarkMode} />
          <div className={isDarkMode ? 'gradient-dark' : 'gradient-light'}>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/anime-list" element={<AnimeList />} />
            </Routes>
          </div>
        </Router>
      </QueryClientProvider>
    </ThemeProvider>
  );
}
