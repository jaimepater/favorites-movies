/**
 *
 * DetailTable
 *
 */
import * as React from 'react';
import { Table, TableBody, TableCell, TableRow } from '@material-ui/core';
import { DetailMovie } from '../../../commons/stores/MoviesStore';

interface DetailTableProps {
  detailMovie: DetailMovie;
}
const DetailTable = ({ detailMovie }: DetailTableProps) => {
  const copyDetailMovie = { ...detailMovie };
  delete copyDetailMovie.Poster
  const keyMovies = Object.keys(copyDetailMovie) as (keyof DetailMovie)[];
  return (
    <Table aria-label="simple table">
      <TableBody>
        {keyMovies.map(row => (
          <TableRow>
            <TableCell>{row}</TableCell>
            <TableCell align="right">{detailMovie[row].toString()}</TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
};

export default DetailTable;
