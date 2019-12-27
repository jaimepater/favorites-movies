/**
 *
 * Movies
 *
 */
import * as React from 'react';
import { observer } from 'mobx-react';
import { Container } from '@material-ui/core';
import useStores from '../../commons/hooks/useStores';
import SearchMovies from './SearchMovies/SearchMovies';
import ListMovies from '../../components/ListMovies/ListMovies';

interface MoviesProps {}
const Movies = observer(() => {
  const {
    managerStore: {
      movieStore: { movies }
    }
  } = useStores();
  return (
    <Container fixed>
      <SearchMovies />
      <ListMovies listMovies={movies} />
    </Container>
  );
});

export default Movies;
