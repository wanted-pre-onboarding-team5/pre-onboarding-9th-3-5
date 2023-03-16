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

// const data = {
//   datasets: [
//     {
//       type: 'line' as const,
//       label: 'AreaData',
//       borderColor: 'rgba(206, 206, 206, 0.855)',
//       borderWidth: 0,
//       fill: true,
//       data: areaArrData,
//       // backgroundColor: 'rgba(185, 185, 185, 0.2)',
//       pointBackgroundColor: ['red', 'blue'],
//       pointStyle: false,
//     },
//     {
//       type: 'bar' as const,
//       label: 'BarData',
//       backgroundColor: coloringGu,
//       // clickHandler,
//       // clickedDistrict === '강남구' ? ['rgba(246, 93, 70, 0.9)', ...colors] : colors,
//       // colors,
//       // coloringGuNames,
//       data: barArrData,
//       yAxisID: 'y_sub',
//     },
//   ],
// };
