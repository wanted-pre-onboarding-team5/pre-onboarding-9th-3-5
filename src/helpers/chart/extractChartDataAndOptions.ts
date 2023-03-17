import extractArrayFromResponse from '../extractArrayFromResponse';

import getChartData from './getChartData';
import getChartOptions from './getChartOptions';

import type { MockDataType } from '@/types/mockData';
import type { QueryDataType } from '@/types/queryData';

const extractChartDataAndOptions = (loaderData: MockDataType, queryData: QueryDataType) => {
  const extractedDataArray = extractArrayFromResponse(loaderData);

  const data = getChartData({ extractedDataArray, queryData });
  const options = getChartOptions({ extractedDataArray });

  return { data, options };
};

export default extractChartDataAndOptions;
