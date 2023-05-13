import React, { FC, useMemo } from 'react';

import {
  Dialog, DialogTitle, Grid,
} from '@mui/material';

import { RootState } from '@redux';
import { useDispatch, useSelector } from 'react-redux';

import { setModalState } from '@redux/appState';
import ModalItem from 'components/ModalItem';
import { SwapiPeople } from 'types';

import Transition from './Transition';

interface IModal {

}

const Modal : FC<IModal> = () => {
  const { isModalVisible, modalContentId } = useSelector((state: RootState) => state.appState);
  const itemList = useSelector((state: RootState): SwapiPeople[] => state.content.itemList);

  const dispatch = useDispatch();

  const onCloseHandle = () => {
    dispatch(setModalState(false));
  };

  const currentData = useMemo(() => {
    if (itemList?.[modalContentId]) {
      const { name, ...items } = itemList[modalContentId];
      return ({
        title: name,
        items: Object.entries(items),
      });
    }
    return ({
      title: 'Modal',
      items: [],
    });
  }, [itemList, modalContentId]);

  return (
    <Dialog
      onClose={onCloseHandle}
      open={isModalVisible}
      TransitionComponent={Transition}
      keepMounted
    >
      <DialogTitle>{currentData.title || 'Modal'}</DialogTitle>
      <Grid container>
        {
          currentData.items.slice(0, 7).map((data, i) => (
            <ModalItem data={data} key={`${i}-modaleItem`} />
          ))
        }
      </Grid>

    </Dialog>
  );
};

export default Modal;
