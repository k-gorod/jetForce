/* eslint-disable jsx-a11y/no-static-element-interactions */
import React, { useEffect } from 'react';

import './index.scss';
import { RootState } from '@redux';
import { useDispatch, useSelector } from 'react-redux';

// import { setModalState } from '@redux/appState';
import { getItemList } from '@redux/content';

const App: React.FC = () => {
  const itemList = useSelector((state: RootState) => state.content.itemList);

  const dispatch = useDispatch();

  const clickHandler = () => {
    // dispatch(setModalState(!modal));
    console.log(itemList);
  };

  useEffect(() => {
    dispatch(getItemList());
  }, []);

  return (
    <div
      className="app_container"
    >
      <div className="app_title" onClick={clickHandler}>{`${itemList}`}</div>
    </div>
  );
};

export default App;
