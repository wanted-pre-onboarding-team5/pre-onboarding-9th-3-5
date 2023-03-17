import type { Id } from '@/types/responseData';

import { CHART_BG_COLOR, UNSELECTED_BG_COLOR, CHART_OPACITY } from '@/constants/chart';
import { transparentize } from '@/utils/transparentize';

export const getCurrentFilter = () => {
  return new URLSearchParams(location.search).get('selectedId') || 'ALL';
};

export const fillChartColor = (selectedId: Id) => {
  const filter = getCurrentFilter();

  if (filter === selectedId) {
    return transparentize(CHART_BG_COLOR[selectedId], CHART_OPACITY.selected);
  }

  if (filter === 'ALL') {
    return transparentize(CHART_BG_COLOR[selectedId], CHART_OPACITY.default);
  }

  return UNSELECTED_BG_COLOR;
};
