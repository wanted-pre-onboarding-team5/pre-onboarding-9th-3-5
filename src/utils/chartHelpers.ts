import { ChartData, ChartOptions, ChartTypeRegistry, TooltipItem } from 'chart.js';

const getChartData = (labels: string[], areaData: number[], barData: number[]): ChartData => {
  return {
    labels,
    datasets: [
      {
        type: 'line' as const,
        label: 'Area',
        borderColor: 'rgb(255, 99, 132)',
        borderWidth: 2,
        fill: true,
        data: areaData,
        yAxisID: 'area',
        backgroundColor: 'rgba(53, 162, 235, 0.3)',
      },
      {
        type: 'bar' as const,
        label: 'Bar',
        backgroundColor: 'rgb(75, 192, 192)',
        data: barData,
        borderColor: 'white',
        borderWidth: 2,
        yAxisID: 'bar',
      },
    ],
  };
};

const getChartOptions = (getTooltipValue: (label: string) => string | string[]): ChartOptions => {
  return {
    scales: {
      bar: {
        type: 'linear',
        position: 'left',
      },
      area: {
        type: 'linear',
        position: 'right',
      },
    },
    animation: false,
    plugins: {
      tooltip: {
        callbacks: {
          label: (tooltipItem: TooltipItem<keyof ChartTypeRegistry>) => {
            const label = tooltipItem.label;
            return getTooltipValue(label);
          },
        },
      },
    },
  };
};

export { getChartData, getChartOptions };
