export const chartOptions = (ids: string[]) => {
  return {
    interaction: {
      intersect: false,
      mode: 'index',
    },
    plugins: {
      legend: {
        position: 'top' as const,
        labels: false,
      },
      title: {
        display: true,
        text: 'Flexsys Chart',
        font: {
          size: 36,
        },
      },
      tooltip: {
        callbacks: {
          title: function (data) {
            return `${ids[data[0].dataIndex]}`;
          },
        },
      },
    },
    scales: {
      x: {
        grid: {
          drawOnChartArea: false,
        },
      },
      bar: {
        min: 10000,
        max: 20000,
        position: 'left' as const,
      },
      area: {
        min: 0,
        max: 300,
        position: 'right' as const,
      },
    },
  };
};

export const chartDataOptions = (labels, barValues, areaValues, filteringGu, coloringGu) => {
  return {
    labels,
    datasets: [
      {
        type: 'bar' as const,
        label: '',
        data: barValues,
        backgroundColor: filteringGu.length !== 0 ? filteringGu : coloringGu,
        yAxisId: 'bar',
      },
      {
        type: 'line' as const,
        fill: true,
        label: '',
        data: areaValues,
        backgroundColor: 'rgba(4, 37, 19, 0.5)',
        yAxisID: 'area',
        tension: 0.3,
        pointBorderColor: 'white',
        pointBackgroundColor: 'rgba(173, 30, 30, 0.5)',
      },
    ],
  };
};
