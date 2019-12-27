/**
 *
 * ListMovies
 *
 */
import * as React from 'react';
import { Movie } from '../../commons/stores/MoviesStore';
import CardMovie from './CardMovie/CardMovie';

interface ListMoviesProps {
  listMovies: Array<Movie>;
}
const ListMovies = ({ listMovies }: ListMoviesProps) => {
  const renderListMovies = listMovies
    ? listMovies.map(movie => <CardMovie movie={movie} key={movie.imdbID} />)
    : null;
  return <>{renderListMovies}</>;
};

export default ListMovies;
