import { ResponseData } from '@/types/ResponseDataType';

export const fillChartColorById = (chartData: ResponseData, responseDataKey: string) => {
  const chartBgColorMap = {
    성북구: 'rgba(255, 99, 132, 0.5)',
    중랑구: 'rgba(54, 162, 235, 0.5)',
    강남구: 'rgba(255, 206, 86, 0.5)',
    노원구: 'rgba(75, 192, 192, 0.5)',
  } as const;

  const placeKey = chartData[responseDataKey].id;

  return chartBgColorMap[placeKey] || 'grey';
};
