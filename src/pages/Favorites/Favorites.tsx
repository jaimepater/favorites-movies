/**
 *
 * Favorites
 *
 */
import React, { useEffect } from 'react';
import { observer } from 'mobx-react';
import { Container } from '@material-ui/core';
import useStores from '../../commons/hooks/useStores';
import ListMovies from '../../components/ListMovies/ListMovies';

const Favorites = observer(() => {
  const {
    managerStore: {
      movieStore: { listFavoritesMovies, getStoredFavoritesMovies }
    }
  } = useStores();

  useEffect(() => {
    getStoredFavoritesMovies();
  }, []);
  return (
    <Container fixed>
      <ListMovies listMovies={listFavoritesMovies} />
    </Container>
  );
});

export default Favorites;
