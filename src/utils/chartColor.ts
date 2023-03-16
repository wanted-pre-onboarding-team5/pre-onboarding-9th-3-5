import { CHART_BG_COLOR } from '@/constants';

import { ResponseData } from '@/types/ResponseDataType';

export const fillChartColorById = (chartData: ResponseData, responseDataKey: string) => {
  const placeKey = chartData[responseDataKey].id;

  return CHART_BG_COLOR[placeKey] || 'grey';
};
