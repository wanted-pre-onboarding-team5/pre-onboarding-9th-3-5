import { useState, useEffect } from 'react';

import { ChartData } from '@/types';

export const useValues = () => {
  const [values, setValues] = useState<ChartData | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch('/data.json').then((response) => response.json());
      setValues(response);
    };

    fetchData();
  }, []);
  
  return values;
};
