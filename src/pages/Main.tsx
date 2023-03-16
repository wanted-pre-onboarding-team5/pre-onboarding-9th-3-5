import { Container } from '@mui/system';
import { useLoaderData, useLocation } from 'react-router-dom';

import type { MockData } from '@/types/mockData';
import type { QueryDataType } from '@/types/queryData';

import FilterBox from '@/components/FilterBox';
import MixedChart from '@/components/MixedChart';
import getQueryData from '@/helpers/getQueryData';

const Main = () => {
  const location = useLocation();
  const loaderData = useLoaderData() as MockData;
  const queryData = getQueryData(location.search);

  return (
    <Container>
      <FilterBox queryData={queryData as QueryDataType} />
      <MixedChart loaderData={loaderData} queryData={queryData as QueryDataType} />
    </Container>
  );
};

export default Main;
