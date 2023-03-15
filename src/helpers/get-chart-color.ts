const colorMap: { [key: string]: string } = {
  중랑구: 'red',
  노원구: 'yellow',
  성북구: 'Green',
  강남구: 'blue',
};

const getChartColor = (idArray: string[], selectedId: string | undefined) => {
  const colorArray = [];

  for (const id of idArray) {
    colorArray.push(id === selectedId || !selectedId ? colorMap[id] : '#efefef');
  }

  return colorArray;
};

export default getChartColor;
