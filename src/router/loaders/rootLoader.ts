import { fetchData } from '@/utils';

export const rootLoader = () => {
  return fetchData('/data.json');
};
