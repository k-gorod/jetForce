import React, { FC } from 'react';

import { Typography } from '@mui/material';
import Grid from '@mui/material/Unstable_Grid2';

import { RootState } from '@redux';
import { useSelector } from 'react-redux';

import ListItem from 'components/ListItem';
import Loader from 'components/Loader';
import { SwapiPeople } from 'types';

interface IList {
  data: SwapiPeople[]
}

const List : FC<IList> = ({ data }) => {
  const isLoading = useSelector((state: RootState) => state.content.isLoading);

  const renderContent = () => {
    if (data?.length > 0) {
      return isLoading
        ? <Loader />
        : data.map((el, i) => (
          <Grid xs={12} lg={6} key={`${i}-listItem`}>
            <ListItem text={(el.name as string)} id={i} />
          </Grid>
        ));
    }
    return (
      <Typography variant="h6" component="p" gutterBottom align="center" sx={{ width: '100%' }}>
        May the force be with you to spell words correct
      </Typography>
    );
  };

  return (
    <Grid
      container
      sx={{
        width: '100%', height: '100%', minHeight: { xs: '600px', lg: '300px' }, textAlign: 'center', textJustify: 'center', alignContent: 'flex-start',
      }}
      spacing={2}
    >
      {renderContent()}
    </Grid>
  );
};

export default List;
