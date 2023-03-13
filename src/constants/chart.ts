export const CHART_OPTIONS = {
  responsive: true,
  plugins: {
    legend: {
      position: 'top' as const,
    },
    title: {
      display: true,
      text: 'Chart',
    },
  },
  scales: {
    y1: {
      position: 'left',
      ticks: {
        beginAtZero: true,
      },
    },
    y2: {
      position: 'right',
      ticks: {
        beginAtZero: false,
      },
    },
  },
};
