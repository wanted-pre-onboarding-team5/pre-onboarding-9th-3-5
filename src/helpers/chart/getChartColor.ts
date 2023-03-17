import type { Id } from '@/types/responseData';

import ID_COLOR_MAP from '@/constants/chart';

const getChartColor = (idArray: Id[], selectedId: Id | undefined) => {
  const colorArray = [];

  for (const id of idArray) {
    colorArray.push(id === selectedId || selectedId === undefined ? ID_COLOR_MAP[id] : '#efefef');
  }

  return colorArray;
};

export default getChartColor;
