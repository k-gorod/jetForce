import React, { useEffect } from 'react';

import './index.scss';
import {
  Container, Typography,
} from '@mui/material';
import Grid from '@mui/material/Unstable_Grid2';

import { RootState } from '@redux';
import { useDispatch, useSelector } from 'react-redux';

import { getItemList } from '@redux/content';
import BottomPagination from 'components/BottomPagination';
import List from 'components/List';
import Modal from 'components/Modal';
import SearchField from 'components/SearchField';

const App: React.FC = () => {
  const itemList = useSelector((state: RootState) => state.content.itemList);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getItemList());
  }, []);

  return (
    <Container maxWidth="sm" sx={{ px: { xs: 0, md: '16px' } }}>
      <Modal />
      <Grid
        container
        direction="column"
        sx={{
          m: '20px',
          alignItems: 'center',
        }}
        rowGap={5}
      >
        <Typography variant="h4" component="h1" gutterBottom align="center">
          Star Wars API
        </Typography>
        <SearchField />
        <List data={itemList} />
      </Grid>
      <BottomPagination />
    </Container>
  );
};

export default App;
