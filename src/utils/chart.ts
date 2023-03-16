import { Y_LABEL } from '@/constants';

import type { ChartData, ChartOptions, ScriptableContext, ChartType } from 'chart.js';

import { ResponseData } from '@/types/ResponseDataType';

type YLabel = (typeof Y_LABEL)[keyof typeof Y_LABEL];
type ChartContext = ScriptableContext<ChartType>;

export const getKeysFromObj = (obj = {}) => {
  return Object.keys(obj);
};

export const extractValueFromResponse = (
  responseData: ResponseData,
  xLabels: string[],
  yLabel: YLabel,
) => {
  return xLabels.map((xLabel) => responseData[xLabel][yLabel]);
};

export const getChartData = (labels: string[], data1: number[], data2: number[]): ChartData => {
  return {
    labels,
    datasets: [
      {
        type: 'line' as const,
        label: 'Value_Area',
        data: data1,
        borderColor: (context: ChartContext) => {
          const { active } = context;
          return active ? 'purple' : 'rgb(227, 179, 242, 0.8)';
        },
        backgroundColor: (context: ChartContext) => {
          const { active } = context;
          return active ? 'purple' : 'rgb(227, 179, 242, 0.8)';
        },
        borderWidth: 2,
        yAxisID: 'y1',
      },
      {
        type: 'bar' as const,
        label: 'Value_Bar',
        data: data2,
        backgroundColor: (context: ChartContext) => {
          const { active } = context;
          if (active) return 'yellow';
          return active ? 'yellow' : 'rgba(233, 227, 157, 0.516)';
        },
        yAxisID: 'y2',
      },
    ],
  };
};

export const getChartOptions = (responseData: ResponseData): ChartOptions => {
  return {
    responsive: true,
    plugins: {
      legend: {
        position: 'top' as const,
      },
      title: {
        display: true,
        text: 'Chart',
      },
      tooltip: {
        callbacks: {
          label: function ({ label }: { label: string }) {
            const { id, value_area, value_bar } = responseData[label];
            const text = `[${id}] 🟣Value_Area: ${value_area} 🟡Value_Bar: ${value_bar}`;
            return text;
          },
        },
      },
    },
    scales: {
      y1: {
        position: 'left',
      },
      y2: {
        position: 'right',
      },
    },
  };
};
