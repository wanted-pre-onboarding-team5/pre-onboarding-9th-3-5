import { CHART_BG_COLOR, CHART_SELECTED_COLOR } from '@/constants';

import { getCurrentFilter } from './filter';

import { Place } from '@/types/ResponseDataType';

export const fillChartColor = (placeKey: Place) => {
  const filter = getCurrentFilter();

  if (filter === placeKey) {
    return CHART_SELECTED_COLOR[placeKey];
  }

  if (filter === 'ALL') {
    return CHART_BG_COLOR[placeKey];
  }

  return 'rgb(0, 0, 0, 0.3)';
};
