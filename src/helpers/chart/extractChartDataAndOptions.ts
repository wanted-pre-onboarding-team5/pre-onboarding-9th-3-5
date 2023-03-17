import extractArrayFromResponse from '../extractArrayFromResponse';

import getChartData from './getChartData';
import getChartOptions from './getChartOptions';

import type { FlexsysApi } from '@/types/responseData';

import { ChartClick } from '@/types/chart';

const extractChartDataAndOptions = (loaderData: FlexsysApi, onClick: ChartClick) => {
  const extractedDataArray = extractArrayFromResponse(loaderData);
  const responseData = loaderData.response;
  const data = getChartData({ responseData, extractedDataArray });
  const options = getChartOptions(extractedDataArray, onClick);

  return { data, options };
};

export default extractChartDataAndOptions;
