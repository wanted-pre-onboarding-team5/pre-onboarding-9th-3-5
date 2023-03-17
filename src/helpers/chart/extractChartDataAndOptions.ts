import extractArrayFromResponse from '../extractArrayFromResponse';

import getChartData from './getChartData';
import getChartOptions from './getChartOptions';

import type { FlexsysApi } from '@/types/responseData';

const extractChartDataAndOptions = (loaderData: FlexsysApi) => {
  const extractedDataArray = extractArrayFromResponse(loaderData);
  const responseData = loaderData.response;
  const data = getChartData({ responseData, extractedDataArray });
  const options = getChartOptions({ extractedDataArray });

  return { data, options };
};

export default extractChartDataAndOptions;
