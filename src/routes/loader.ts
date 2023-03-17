import { httpClient } from '@/utils/httpClient';

const loader = () => {
  return httpClient('/data.json');
};

export default loader;
