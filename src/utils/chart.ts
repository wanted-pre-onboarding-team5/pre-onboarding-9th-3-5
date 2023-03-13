export const getKeysFromObj = (obj = {}) => {
  return Object.keys(obj);
};

export const convert = (data, keys, keyName) => {
  return keys.map((key) => data[key][keyName]);
};

export const getChartData = (labels, data1, data2) => {
  return {
    labels,
    datasets: [
      {
        type: 'line' as const,
        label: 'Value_Area',
        data: data1,
        borderColor: (context) => {
          const { active } = context;
          return active ? 'purple' : 'rgb(227, 179, 242, 0.8)';
        },
        backgroundColor: (context) => {
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
        backgroundColor: (context) => {
          const { active } = context;
          return active ? 'yellow' : 'rgba(233, 227, 157, 0.516)';
        },
        yAxisID: 'y2',
      },
    ],
  };
};

export const getChartOptions = (responseData) => {
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
          label: function ({ label }) {
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
};
