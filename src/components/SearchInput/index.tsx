import React, { FC } from 'react';

import TextField from '@mui/material/TextField';

import { useDispatch } from 'react-redux';

import { setSearchQuery } from '@redux/content';

interface ISearchInput {
  onSearchClick: () => void
}

const SearchInput : FC<ISearchInput> = ({ onSearchClick }) => {
  const dispatch = useDispatch();

  const changeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    dispatch(setSearchQuery(event.target.value));
  };

  const keyDownHandler = (event: React.KeyboardEvent) => {
    if (event.key === 'Enter') {
      onSearchClick();
    }
  };

  return (
    <TextField
      sx={{ width: '80%' }}
      label="Name"
      variant="filled"
      color="primary"
      onChange={changeHandler}
      onKeyDown={keyDownHandler}
    />
  );
};

export default SearchInput;
