const colorMap = {
  중랑구: 'red',
  노원구: 'yellow',
  성북구: 'Green',
  강남구: 'blue',
} as const;

type KeyOfColorMap = keyof typeof colorMap;

const getChartColor = (idArray: KeyOfColorMap[]) => {
  const colorArray = [];

  for (const id of idArray) {
    colorArray.push(colorMap[id]);
  }

  return colorArray;
};

export default getChartColor;
