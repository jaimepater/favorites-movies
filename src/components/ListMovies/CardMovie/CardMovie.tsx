/**
 *
 * CardMovie
 *
 */
import * as React from 'react';
import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Grid,
} from '@material-ui/core';
import Typography from '@material-ui/core/Typography';
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
import { useHistory } from 'react-router-dom';
import { observer } from 'mobx-react';
import FavoriteIcon from '@material-ui/icons/Favorite';
import { Movie } from '../../../commons/stores/MoviesStore';
import useStores from '../../../commons/hooks/useStores';

interface CardMovieProps {
  movie: Movie;
}
const CardMovie = observer(({ movie }: CardMovieProps) => {
  const history = useHistory();
  const {
    managerStore: {
      movieStore: { handleFavoriteMovie, isFavoriteMovie }
    }
  } = useStores();

  const handleFavorite = () => handleFavoriteMovie(movie);

  const renderIcon = !isFavoriteMovie(movie) ? (
    <FavoriteBorderIcon onClick={handleFavorite} />
  ) : (
    <FavoriteIcon onClick={handleFavorite} />
  );

  const handleDetails = () => history.push(`/home/details/${movie.imdbID}`);
  return (
    <Card>
      <CardContent>
        <Grid
          container
          direction="row"
          justify="space-between"
          alignItems="center"
          spacing={3}
        >
          <Grid item xs={4}>
            <CardMedia image={movie.Poster} height="140" component="img" />
          </Grid>
          <Grid item xs={6}>
            <Typography variant="h6">{movie.Title}</Typography>
            <Typography variant="subtitle1">{movie.Year}</Typography>
          </Grid>
        </Grid>
      </CardContent>
      <CardActions>
        {renderIcon}
        <Button size="small" color="primary" onClick={handleDetails}>
          Learn More
        </Button>
      </CardActions>
    </Card>
  );
});

export default CardMovie;
