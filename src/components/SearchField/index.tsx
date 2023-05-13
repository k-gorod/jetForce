import React, { FC } from 'react';

import SearchIcon from '@mui/icons-material/Search';
import { Fab, Grid } from '@mui/material';

import { useDispatch } from 'react-redux';

import { getItemList, setCurrentPage } from '@redux/content';
import SearchInput from 'components/SearchInput';

interface ISearchField {

}

const SearchField : FC<ISearchField> = () => {
  const dispatch = useDispatch();

  const onSearchClick = () => {
    dispatch(setCurrentPage(1));
    dispatch(getItemList());
  };

  return (
    <Grid
      direction="row"
      container
      sx={{
        width: '100%',
        maxWidth: '1000px',
        margin: '0 auto',
        justifyContent: 'space-around',
      }}
    >
      <SearchInput onSearchClick={onSearchClick} />
      <Fab color="primary" onClick={onSearchClick}>
        <SearchIcon />
      </Fab>
    </Grid>
  );
};

export default SearchField;
