import React, { FC } from 'react';

import { Pagination } from '@mui/material';

import { RootState } from '@redux';
import { useDispatch, useSelector } from 'react-redux';

import { getItemList, setCurrentPage } from '@redux/content';

interface IPagination {

}

const BottomPagination : FC<IPagination> = () => {
  const { itemsCount, currentPage } = useSelector((state: RootState) => state.content);
  const dispatch = useDispatch();

  const handleChange = (_: React.ChangeEvent<unknown>, value: number) => {
    dispatch(setCurrentPage(value));
    dispatch(getItemList());
  };

  const renderContent = () => (
    itemsCount >= 11
      ? <Pagination color="primary" variant="text" onChange={handleChange} page={currentPage} count={Math.ceil(itemsCount / 10)} sx={{ width: 'max-content', margin: '40px auto' }} />
      : null
  );

  return renderContent();
};

export default BottomPagination;
