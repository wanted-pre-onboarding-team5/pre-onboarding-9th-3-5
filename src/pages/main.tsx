import { Container } from '@mui/system';
import { useLoaderData, useLocation } from 'react-router-dom';

import type { MockData } from '@/types/mock-data';
import type { QueryDataType } from '@/types/query-data';

import FilterBox from '@/components/filter-box';
import MixedChart from '@/components/mixed-chart';
import getQueryData from '@/helpers/get-query-data';

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
