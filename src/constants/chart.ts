import { transparentize } from '@/utils/transparentize';

export const CHART_BG_COLOR = {
  성북구: 'rgba(255, 99, 132)',
  중랑구: 'rgba(54, 162, 235)',
  강남구: 'rgba(255, 206, 86)',
  노원구: 'rgba(75, 192, 192)',
} as const;

export const CHART_OPACITY = {
  default: 0.5,
  selected: 1,
  unselected: 0.3,
  line: 0.7,
} as const;

export const LINE_CHART_BG_COLOR = 'rgba(227, 179, 242, 0.8)';

export const UNSELECTED_BG_COLOR = 'rgba(0, 0, 0, 0.3)';

export const CHART_FILTER = [
  {
    name: 'ALL',
    bg: 'while',
  },
  {
    name: '성북구',
    bg: transparentize(CHART_BG_COLOR.성북구, 0.5),
  },
  {
    name: '중랑구',
    bg: transparentize(CHART_BG_COLOR.중랑구, 0.5),
  },
  {
    name: '강남구',
    bg: transparentize(CHART_BG_COLOR.강남구, 0.5),
  },
  {
    name: '노원구',
    bg: transparentize(CHART_BG_COLOR.노원구, 0.5),
  },
] as const;
