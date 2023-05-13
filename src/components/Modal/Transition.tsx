/* eslint-disable react/jsx-props-no-spreading */

/** Component that provide appear animation */

import React from 'react';

import { Slide } from '@mui/material';
import { TransitionProps } from '@mui/material/transitions';

export default React.forwardRef((
  props: TransitionProps & {
    children: React.ReactElement;
  },
  ref: React.Ref<unknown>,
) => <Slide direction="left" ref={ref} {...props} />);
