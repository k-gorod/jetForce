import React, { FC } from 'react';

import Paper from '@mui/material/Paper';

import { useDispatch } from 'react-redux';

import { setModalContent, setModalState } from '@redux/appState';

interface IListItem {
  text: string,
  id: number
}

const style = {
  width: '100%',
  height: '44px',
  padding: '10px',
  cursor: 'pointer',
  backgoundColor: 'red',
  whiteSpace: 'nowrap',
  textOverflow: 'ellipsis',
  overflow: 'hidden',
  opacity: '0.9',
};

const ListItem : FC<IListItem> = ({ text, id }) => {
  const dispatch = useDispatch();

  const onClickHandler = () => {
    dispatch(setModalContent(id));
    dispatch(setModalState(true));
  };

  return (
    <Paper
      elevation={6}
      variant="elevation"
      sx={style}
      onClick={onClickHandler}
    >
      {text}
    </Paper>
  );
};

export default ListItem;
