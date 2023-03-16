export const getChartColor = (districtValues: string[]) => {
  return districtValues.map((value) =>
    value === '중랑구'
      ? 'rgba(87, 224, 142, 1)'
      : value === '성북구'
      ? 'rgba(169, 123, 229, 1)'
      : value === '강남구'
      ? 'rgba(224, 142, 87, 1)'
      : 'rgba(87, 167, 224, 1)',
  );
};

export const filterDistrict = (districtValues: string[], name: string) => {
  const filteredArr: string[] = [];

  districtValues.forEach((value) =>
    value === name ? filteredArr.push('rgba(114, 143, 227, 1)') : filteredArr.push('#bbb'),
  );
  return filteredArr;
};
