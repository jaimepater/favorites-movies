import { action, computed, observable } from 'mobx';
import { AxiosResponse } from 'axios';
import { IManagerStore } from './Stores';
import {
  FAVORITES_MOVIES,
  SESSION_USER,
  SESSION_USERS
} from '../utils/constants';
import httpRequest from '../utils/http';

export interface IMoviesStore {
  movies: Array<Movie>;
  detailMovie: DetailMovie | undefined;
  title: string;
  favoritesMovies: Array<Movie & FavoriteMovie>;
  listFavoritesMovies: Array<Movie>;
  maxPages: number;
  isFavoriteMovie(movie: Movie): boolean;
  getStoredFavoritesMovies(): void;
  saveFavoriteMovies(movie: Movie): void;
  saveFavoritesMoviesInStorage(): void;
  removeFavoriteMovie(movieDelete: Movie): void;
  getFavoriteMovie(movie: Movie): Movie | undefined;
  favoriteMovieForUser(
    movie: Movie,
    favoriteMovie: Movie & FavoriteMovie
  ): boolean;
  handleFavoriteMovie(movie: Movie): void;
  setTitle(title: string): void;
  searchMovies(): void;
  getDetail(id: string): void;
}

export interface Movie {
  Title: string;
  Year: string;
  imdbID: string;
  Type: string;
  Poster: string;
}

export interface FavoriteMovie {
  user: string | undefined;
}

export interface DetailMovie {
  Title: string;
  Year: string;
  imdbID: string;
  Type: string;
  Poster: string;
  Released: string;
  Runtime: string;
  Genre: string;
  Director: string;
  Writer: string;
  Actors: string;
  Plot: string;
  Language: string;
  Country: string;
  Awards: string;
}

interface DetailResponse {
  data: DetailMovie;
}

export default class MoviesStore implements IMoviesStore {
  stores: IManagerStore;

  constructor(stores: IManagerStore) {
    this.stores = stores;
    this.getStoredFavoritesMovies();
  }

  @observable movies: Array<Movie> = [];

  @observable detailMovie: DetailMovie | undefined = undefined;

  @observable title = '';

  @observable maxPages = 0;

  @observable favoritesMovies: Array<Movie & FavoriteMovie> = [];

  @action
  public searchMovies = () => {
    httpRequest('SEARCH_MOVIE_TITLE', [
      { keyParam: 'TITLE', valueParam: this.title }
    ]).then((response: any) => {
      this.movies = response.data.Search;
      this.maxPages = Math.ceil(response.data.totalResults / 10);
    });
  };

  @action
  public setTitle = (title: string) => {
    this.title = title;
  };

  @action
  getStoredFavoritesMovies = () => {
    this.favoritesMovies = JSON.parse(
      localStorage.getItem(FAVORITES_MOVIES) || '[]'
    );
  };

  @action
  saveFavoriteMovies = (movie: Movie) => {
    const { loginUser: user } = this.stores.userStore;
    this.favoritesMovies.push({ ...movie, user });
    this.saveFavoritesMoviesInStorage();
  };

  @action
  removeFavoriteMovie = (movieDelete: Movie) => {
    const { loginUser: user } = this.stores.userStore;
    this.favoritesMovies = this.favoritesMovies.filter(
      favoriteMovie => !this.favoriteMovieForUser(movieDelete, favoriteMovie)
    );
    this.saveFavoritesMoviesInStorage();
  };

  saveFavoritesMoviesInStorage = () => {
    localStorage.setItem(
      FAVORITES_MOVIES,
      JSON.stringify(this.favoritesMovies)
    );
  };

  getFavoriteMovie = (movie: Movie) => {
    const { loginUser } = this.stores.userStore;
    const favorite = this.favoritesMovies.find(favoriteMovie =>
      this.favoriteMovieForUser(movie, favoriteMovie)
    );
    if (favorite?.user) {
      const { user, ...copyFavorite } = favorite;
      return copyFavorite;
    }
    return undefined;
  };

  handleFavoriteMovie = (movie: Movie) => {
    if (this.isFavoriteMovie(movie)) {
      this.removeFavoriteMovie(movie);
    } else {
      this.saveFavoriteMovies(movie);
    }
  };

  favoriteMovieForUser = (
    movie: Movie,
    favoriteMovie: Movie & FavoriteMovie
  ) => {
    const { loginUser: user } = this.stores.userStore;
    return movie.imdbID === favoriteMovie.imdbID && favoriteMovie.user === user;
  };

  isFavoriteMovie = (movie: Movie) => !!this.getFavoriteMovie(movie);

  @action
  public getDetail = (id: string) => {
    httpRequest('GET_MOVIE_DETAIL', [{ keyParam: 'ID', valueParam: id }]).then(
      (response: AxiosResponse<DetailMovie>) => {
        this.detailMovie = response.data;
      }
    );
  };

  @computed get listFavoritesMovies() {
    const { loginUser } = this.stores.userStore;
    const copyFavoritesMovies = this.favoritesMovies
      .slice()
      .filter(favoriteMovie => favoriteMovie.user === loginUser);
    return copyFavoritesMovies.map(({ user, ...movieData }) => movieData);
  }
}
