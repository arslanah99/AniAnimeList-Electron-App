import { MemoryRouter as Router, Routes, Route } from 'react-router-dom';
import { Button } from '@mui/material';
import '@fontsource/open-sans';
import '@fontsource/open-sans/800.css';
import '@fontsource/open-sans/600.css';
import { SiMyanimelist } from 'react-icons/si';
import icon from '../../assets/icon.svg';
import './App.css';

function Hello() {
  return (
    <div>
      <div className="Hello">
        <img width="200" alt="icon" src={icon} />
      </div>
      <h1>electron-react-boilerplate</h1>
      <div className="Hello">
        <a
          href="https://electron-react-boilerplate.js.org/"
          target="_blank"
          rel="noreferrer"
        >
          <button type="button">
            <span role="img" aria-label="books">
              📚
            </span>
            Read our docs
          </button>
        </a>

        <Button
          sx={{ fontFamily: 'Open sans', fontSize: 50, fontWeight: 900 }}
          variant="outlined"
        >
          Hello there
        </Button>
        <SiMyanimelist style={{ fontSize: 500 }} />
        <a
          href="https://github.com/sponsors/electron-react-boilerplate"
          target="_blank"
          rel="noreferrer"
        >
          <button type="button">
            <span role="img" aria-label="folded hands">
              🙏
            </span>
            Donate
          </button>
        </a>
      </div>
    </div>
  );
}

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Hello />} />
      </Routes>
    </Router>
  );
}
