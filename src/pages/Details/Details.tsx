/**
 *
 * Details
 *
 */
import React, { useEffect } from 'react';
import { observer } from 'mobx-react';
import { useParams } from 'react-router-dom';
import { Card, CardContent, CardMedia } from '@material-ui/core';
import useStores from '../../commons/hooks/useStores';
import DetailTable from './DetailTable/DetailTable';

const Details = observer(() => {
  const {
    managerStore: {
      movieStore: { getDetail, detailMovie }
    }
  } = useStores();

  const { id } = useParams();

  useEffect(() => {
    if (id) {
      getDetail(id);
    }
  }, []);

  const card = (
    <Card>
      <CardContent>
        <CardMedia image={detailMovie?.Poster} height="200" component="img" />
        {detailMovie ? <DetailTable detailMovie={detailMovie} /> : null}
      </CardContent>
    </Card>
  );

  const renderDetail = detailMovie ? card : null;

  return renderDetail;
});

export default Details;
