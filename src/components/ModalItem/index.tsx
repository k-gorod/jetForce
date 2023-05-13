import React, { FC, useMemo, useState } from 'react';

import {
  Grid, DialogContent, TextField,
} from '@mui/material';

import EditIcon from 'components/Icons/EditIcon';
import { CustomKeyboardEventType } from 'types';

interface IModalItem {
  data: [
    string,
    string
  ]
}

const ModalItem : FC<IModalItem> = ({ data }) => {
  const [editIsVidible, setEditIsVisible] = useState(false);

  const [customValue, setCustomValue] = useState(''); // Beacuse there is no server submit methods

  const [inputIsVisible, setInputIsVisible] = useState(false);

  const mouseOverHandle = () => {
    setEditIsVisible(true);
  };

  const mouseLeaveHandle = () => {
    setEditIsVisible(false);
  };

  const onEditClick = () => {
    setInputIsVisible(true);
    setEditIsVisible(false);
  };

  const inputOnBlur = () => {
    setInputIsVisible(false);
  };

  const onInputKeydown = (event: CustomKeyboardEventType) => {
    if (event.key === 'Enter') {
      setCustomValue(event.target.value || '');
      setInputIsVisible(false);
    }
  };

  const [key, value] = useMemo(() => data, [data]);

  const renderContent = () => (
    inputIsVisible
      ? <TextField autoFocus onKeyDown={onInputKeydown} onBlur={inputOnBlur} fullWidth size="small" variant="standard" label={`${key}`} />
      : `${key} : ${(customValue || value)}`
  );

  return (
    <Grid xs={12} md={6} item sx={{ minHeight: '56px' }}>
      <DialogContent sx={{ height: '100%', py: inputIsVisible ? '0' : '16px' }} onMouseOver={mouseOverHandle} onMouseLeave={mouseLeaveHandle}>
        {
          renderContent()
        }
        <EditIcon isVisible={editIsVidible && !inputIsVisible} onEditClick={onEditClick} />
      </DialogContent>
    </Grid>
  );
};

export default ModalItem;
