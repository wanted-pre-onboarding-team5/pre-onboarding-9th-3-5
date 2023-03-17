import extractArrayFromResponse from '../extractArrayFromResponse';

import getChartData from './getChartData';
import getChartOptions from './getChartOptions';

import type { QueryData } from '@/types/queryData';
import type { FlexsysApi } from '@/types/responseData';

const extractChartDataAndOptions = (loaderData: FlexsysApi, queryData: QueryData) => {
  const extractedDataArray = extractArrayFromResponse(loaderData);

  const data = getChartData({ extractedDataArray, queryData });
  const options = getChartOptions({ extractedDataArray });

  return { data, options };
};

export default extractChartDataAndOptions;
