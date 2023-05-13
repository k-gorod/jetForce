import React, { FC } from 'react';

import MaterialEditIcon from '@mui/icons-material/Edit';

interface IEditIcon {
  isVisible: boolean,
  onEditClick: () => void
}

const EditIcon : FC<IEditIcon> = ({ isVisible, onEditClick }) => (
  isVisible
    ? (
      <MaterialEditIcon sx={{ height: '17px', cursor: 'pointer' }} onClick={onEditClick} />
    )
    : null
);

export default EditIcon;
