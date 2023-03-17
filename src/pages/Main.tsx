import { Container } from '@mui/system';
import { useLoaderData, useLocation } from 'react-router-dom';

import type { MockDataType } from '@/types/mockData';
import type { QueryDataType } from '@/types/queryData';

import FilterableChart from '@/components/FilterableChart';
import Header from '@/components/Header';
import getQueryData from '@/helpers/getQueryData';

const Main = () => {
  const location = useLocation();
  const loaderData = useLoaderData() as MockDataType;
  const queryData = getQueryData(location.search);

  return (
    <Container>
      <Header />
      <FilterableChart loaderData={loaderData} queryData={queryData as QueryDataType} />
    </Container>
  );
};

export default Main;
