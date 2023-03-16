export const coloringGuNames = (ids: string[]) => {
  return ids.map((id) =>
    id === '중랑구'
      ? 'rgba(157, 203, 49, 0.5)'
      : id === '성북구'
      ? 'rgba(32, 127, 165, 0.5)'
      : id === '강남구'
      ? 'rgba(188, 49, 203, 0.5)'
      : 'rgba(230, 22, 50, 0.5)',
  );
};
