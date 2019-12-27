import React from 'react';

import Login from '../../pages/Login/Login';
import Home from '../../pages/Home/Home';
import Movies from '../../pages/Movies/Movies';
import Favorites from '../../pages/Favorites/Favorites';
import Details from '../../pages/Details/Details';

export const listMainRoutes = [
  { name: 'login', component: Login, path: '/', exact: true },
  { name: 'home', component: Home, path: '/home', exact: false }
];

export const listHomeRoutes = [
  { name: 'home', component: Movies, path: '/home', exact: true },
  {
    name: 'favorites',
    component: Favorites,
    path: '/home/favorites',
    exact: true
  },
  {
    name: 'details',
    component: Details,
    path: '/home/details/:id',
    exact: true
  }
];
