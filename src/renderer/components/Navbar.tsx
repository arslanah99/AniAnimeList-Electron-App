import {
  AppBar,
  Toolbar,
  Typography,
  IconButton,
  Drawer,
  List,
  ListItem,
  useMediaQuery,
  useTheme,
} from '@mui/material';
import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { GiHamburgerMenu } from 'react-icons/gi';

function Navbar() {
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
    </>
  );

  return (
    <AppBar position="fixed">
      <Toolbar>
        <Typography variant="h6" sx={{ flexGrow: 1 }}>
          Electron Anime App
        </Typography>
        {isMobile ? (
          <>
            <IconButton
              edge="end"
              color="inherit"
              onClick={() => toggleDrawer(true)}
            >
              <GiHamburgerMenu />
            </IconButton>
            <Drawer
              anchor="right"
              open={drawerOpen}
              onClose={() => toggleDrawer(false)}
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

export default Navbar;
