/**
 *
 * SearchMovies
 *
 */
import * as React from 'react';
import { observer } from 'mobx-react';
import { Button, FormControl, Grid, TextField } from '@material-ui/core';
import useStores from '../../../commons/hooks/useStores';

const SearchMovies = observer(() => {
  const {
    managerStore: {
      movieStore: { searchMovies, setTitle, title }
    }
  } = useStores();
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setTitle(event.target.value);
  };
  return (
    <Grid
      container
      direction="row"
      justify="space-between"
      alignItems="center"
      spacing={3}
    >
      <Grid item xs={10}>
        <FormControl fullWidth>
          <TextField
            required
            id="movie"
            value={title}
            onChange={handleChange}
            label="movie name"
          />
        </FormControl>
      </Grid>
      <Grid item xs={2}>
        <Button
          size="large"
          variant="contained"
          color="primary"
          onClick={searchMovies}
        >
          Search
        </Button>
      </Grid>
    </Grid>
  );
});

export default SearchMovies;
