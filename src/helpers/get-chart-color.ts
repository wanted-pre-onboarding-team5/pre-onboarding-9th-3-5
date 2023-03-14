const getChartColor = (idArray: string[]) => {
  const colorArray = [];

  for (const id of idArray) {
    let color = 'gray';

    if (id === '중랑구') color = 'red';
    else if (id === '노원구') color = 'yellow';
    else if (id === '성북구') color = 'green';
    else if (id === '강남구') color = 'blue';

    colorArray.push(color);
  }

  return colorArray;
};

export default getChartColor;
