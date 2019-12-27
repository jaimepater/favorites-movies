/**
 *
 * Menu
 *
 */
import * as React from 'react';
import {
  AppBar,
  Button,
  IconButton,
  Toolbar,
  Typography
} from '@material-ui/core';
import MovieIcon from '@material-ui/icons/Movie';
import { Link } from 'react-router-dom';

interface MenuProps {
  logout(): void;
}

const Menu = ({ logout }: MenuProps) => {
  return (
    <AppBar position="static">
      <Toolbar>
        <Link to="/home">
          <IconButton edge="start" aria-label="menu">
            <MovieIcon />
          </IconButton>
        </Link>
        <Link to="/home/favorites">
          <Button>favorites</Button>
        </Link>
        <Button color="secondary" variant="contained" onClick={logout}>
          Logout
        </Button>
      </Toolbar>
    </AppBar>
  );
};

export default Menu;
