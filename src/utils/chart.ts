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
        borderColor: 'rgb(227, 179, 242)',
        borderWidth: 2,
        yAxisID: 'y1',
      },
      {
        type: 'bar' as const,
        label: 'Value_Bar',
        data: data2,
        backgroundColor: 'rgba(233, 227, 157, 0.516)',
        yAxisID: 'y2',
      },
    ],
  };
};
