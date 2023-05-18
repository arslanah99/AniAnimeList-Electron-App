import {
  AppBar,
  Button,
  Drawer,
  IconButton,
  List,
  ListItem,
  Toolbar,
  Typography,
  useMediaQuery,
  useTheme,
} from '@mui/material';
import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { FaHamburger, FaSun, FaMoon } from 'react-icons/fa';

// eslint-disable-next-line import/prefer-default-export
export function Navbar({ toggleTheme, isDarkMode }) {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  const toggleDrawer = (open: boolean) => {
    setDrawerOpen(open);
  };

  const menuItems = (
    <>
      <NavLink to="/" style={{ textDecoration: 'none', color: 'inherit' }}>
        <IconButton>
          <Typography>Home</Typography>
        </IconButton>
      </NavLink>
      <NavLink
        to="/anime-list"
        style={{ textDecoration: 'none', color: 'inherit' }}
      >
        <IconButton>
          <Typography>Anime List</Typography>
        </IconButton>
      </NavLink>
      {isDarkMode ? (
        <Button onClick={toggleTheme}>
          <FaSun style={{ color: 'yellow' }} />
        </Button>
      ) : (
        <Button onClick={toggleTheme} style={{ color: 'blue' }}>
          <FaMoon />
        </Button>
      )}
    </>
  );

  return (
    <AppBar position="fixed">
      <Toolbar>
        <Typography variant="h6" sx={{ flexGrow: 1 }}>
          Electron Ani-Anime List
        </Typography>
        {isMobile ? (
          <>
            <IconButton color="inherit" onClick={() => toggleDrawer(true)}>
              <FaHamburger />
            </IconButton>
            <Drawer
              anchor="right"
              open={drawerOpen}
              onClick={() => toggleDrawer(false)}
            >
              <List>
                <ListItem>{menuItems}</ListItem>
              </List>
            </Drawer>
          </>
        ) : (
          menuItems
        )}
      </Toolbar>
    </AppBar>
  );
}
