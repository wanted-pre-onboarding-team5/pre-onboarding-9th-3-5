import type { IDType } from '@/types/mockData';

import ID_COLOR_MAP from '@/constants/chart';

const getChartColor = (idArray: IDType[], selectedID: IDType | undefined) => {
  const colorArray = [];

  for (const id of idArray) {
    colorArray.push(id === selectedID || selectedID === undefined ? ID_COLOR_MAP[id] : '#efefef');
  }

  return colorArray;
};

export default getChartColor;
