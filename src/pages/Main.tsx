import Box from '@mui/material/Box';
import { useLoaderData, useLocation } from 'react-router-dom';

import type { QueryData } from '@/types/queryData';
import type { FlexsysApi } from '@/types/responseData';

import FilterableChart from '@/components/FilterableChart';
import Header from '@/components/Header';
import getQueryData from '@/helpers/getQueryData';

const Main = () => {
  const location = useLocation();
  const loaderData = useLoaderData() as FlexsysApi;
  const queryData = getQueryData(location.search);

  return (
    <Box sx={{ m: 1 }}>
      <Header />
      <FilterableChart loaderData={loaderData} queryData={queryData as QueryData} />
    </Box>
  );
};

export default Main;
