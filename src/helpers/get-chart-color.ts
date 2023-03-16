import type { IDType } from '@/types/mock-data';

import ID_COLOR_MAP from '@/constants/id-color';

const getChartColor = (idArray: IDType[], selectedID: IDType | undefined) => {
  const colorArray = [];

  for (const id of idArray) {
    colorArray.push(id === selectedID || selectedID === undefined ? ID_COLOR_MAP[id] : '#efefef');
  }

  return colorArray;
};

export default getChartColor;
