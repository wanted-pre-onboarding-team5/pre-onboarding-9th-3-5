export const Y_LABEL = {
  area: 'value_area',
  bar: 'value_bar',
} as const;

export const CHART_BG_COLOR = {
  성북구: 'rgba(255, 99, 132, 0.5)',
  중랑구: 'rgba(54, 162, 235, 0.5)',
  강남구: 'rgba(255, 206, 86, 0.5)',
  노원구: 'rgba(75, 192, 192, 0.5)',
} as const;

export const CHART_SELECTED_COLOR = {
  성북구: 'rgba(255, 99, 132)',
  중랑구: 'rgba(54, 162, 235)',
  강남구: 'rgba(255, 206, 86)',
  노원구: 'rgba(75, 192, 192)',
} as const;

export const FILTER = [
  {
    name: 'ALL',
    bg: 'while',
  },
  {
    name: '성북구',
    bg: CHART_BG_COLOR.성북구,
  },
  {
    name: '중랑구',
    bg: CHART_BG_COLOR.중랑구,
  },
  {
    name: '강남구',
    bg: CHART_BG_COLOR.강남구,
  },
  {
    name: '노원구',
    bg: CHART_BG_COLOR.노원구,
  },
] as const;
