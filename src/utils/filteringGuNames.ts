import { coloringGuNames } from './coloringGuNames';

export const filteringGuNames = (ids: string[], guName: string) => {
  const filteringArr: string[] = [];
  if (guName === '전체 보기') return coloringGuNames(ids);
  ids.forEach((id) =>
    id === guName && guName === '중랑구'
      ? filteringArr.push('rgba(157, 203, 49, 0.5)')
      : id === guName && guName === '성북구'
      ? filteringArr.push('rgba(32, 127, 165, 0.5)')
      : id === guName && guName === '강남구'
      ? filteringArr.push('rgba(188, 49, 203, 0.5)')
      : id === guName && guName === '노원구'
      ? filteringArr.push('rgba(230, 22, 50, 0.5)')
      : filteringArr.push('gray'),
  );
  return filteringArr;
};
