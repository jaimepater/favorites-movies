import React from 'react';
import UsersStore, { IUserStore } from './UsersStore';
import MoviesStore, { IMoviesStore } from './MoviesStore';

export interface IManagerStore {
  userStore: IUserStore;
  movieStore: IMoviesStore;
}

class ManagerStore implements IManagerStore {
  userStore: IUserStore;

  movieStore: IMoviesStore;

  constructor() {
    this.userStore = new UsersStore(this);
    this.movieStore = new MoviesStore(this);
  }
}

const storesContext = React.createContext({
  managerStore: new ManagerStore()
});

export default storesContext;
