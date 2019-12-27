import { action, computed, observable } from 'mobx';
import { IManagerStore } from './Stores';
import { SESSION_USER, SESSION_USERS } from '../utils/constants';

export interface IUserStore {
  isAuthenticate: boolean;
  stores: IManagerStore;
  loginUser: string | undefined;
  users: Array<User>;
  getUsers(): void;
  logout(): void;
  setUsers(users: Array<User>): void;
  validateUser(userData: User): void;
}

export interface User {
  name: string;
  password: string;
}

export default class UsersStore implements IUserStore {
  stores: IManagerStore;

  constructor(stores: IManagerStore) {
    this.stores = stores;
    this.loginUser = sessionStorage.getItem(SESSION_USER) || undefined;
  }

  @observable loginUser: string | undefined;

  @observable users: Array<User> = [];

  @computed get isAuthenticate() {
    return !!this.loginUser;
  }

  @action
  public logout = () => {
    this.loginUser = undefined;
    sessionStorage.removeItem(SESSION_USER);
    this.stores.movieStore.favoritesMovies = [];
    this.stores.movieStore.movies = [];
    this.stores.movieStore.maxPages = 0;
    this.stores.movieStore.title = '';
    this.stores.movieStore.detailMovie = undefined;
  };

  @action
  public getUsers = () => {
    this.users = JSON.parse(sessionStorage.getItem(SESSION_USERS) || '[]');
  };

  @action
  public setUsers = (users: Array<User>) => {
    this.users = users;
    sessionStorage.setItem(SESSION_USERS, JSON.stringify(users));
  };

  @action
  validateUser = (userData: User) => {
    this.getUsers();
    const userCredentials = this.users.find(
      user => user.name === userData.name && user.password === userData.password
    );
    this.loginUser = userCredentials?.name;
    if (userCredentials) {
      sessionStorage.setItem(SESSION_USER, this.loginUser || '');
    } else {
      this.logout();
    }
  };
}
