import { Button, ButtonGroup } from '@mui/material';
import { Container } from '@mui/system';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
  PointElement,
  LineElement,
  Filler,
} from 'chart.js';
import { useEffect, useRef, useState } from 'react';
import { Chart } from 'react-chartjs-2';

import { chartDataOptions, chartOptions } from '@/utils/chartOptions';
import { coloringGuNames } from '@/utils/coloringGuNames';
import { FlexsysMockAPI } from '@/utils/fetch';
import { filteringGuNames } from '@/utils/filteringGuNames';

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
  PointElement,
  LineElement,
  Filler,
);

export function Root() {
  const [chartDatas, setChartDatas] = useState([]);
  const [filteringGu, setFilteringGu] = useState([]);
  const chartRef = useRef();
  let didInit = false;

  useEffect(() => {
    if (!didInit) {
      didInit = true;
      const fetchMockAPI = async () => {
        const { response } = await FlexsysMockAPI('http://127.0.0.1:5173/data.json', {
          method: 'GET',
        });
        setChartDatas(response);
      };
      fetchMockAPI();
    }
  }, []);

  interface ValuesType {
    id: string;
    value_area: number;
    value_bar: number;
  }
  const barValues: Array<number> = Object.values(chartDatas)?.map((i: ValuesType) => i.value_bar);
  const areaValues: Array<number> = Object.values(chartDatas)?.map((i: ValuesType) => i.value_area);
  const ids: Array<string> = Object.values(chartDatas)?.map((i: ValuesType) => i.id);
  const labels = Object.keys(chartDatas)?.map((i) => i);
  const coloringGu = coloringGuNames(ids);

  const onChartClickHandler = () => {
    const guName = chartRef.current.tooltip.title[0];
    setFilteringGu(filteringGuNames(ids, guName));
  };

  const onButtonFilteringHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    const { name: guName } = e.target;
    setFilteringGu(filteringGuNames(ids, guName));
  };

  const buttons = [
    <Button key='one' onClick={onButtonFilteringHandler} name='전체 보기'>
      전체 보기
    </Button>,
    <Button key='two' onClick={onButtonFilteringHandler} name='성북구'>
      성북구
    </Button>,
    <Button key='three' onClick={onButtonFilteringHandler} name='강남구'>
      강남구
    </Button>,
    <Button key='four' onClick={onButtonFilteringHandler} name='노원구'>
      노원구
    </Button>,
    <Button key='five' onClick={onButtonFilteringHandler} name='중랑구'>
      중랑구
    </Button>,
  ];

  const options = chartOptions(ids);
  const data = chartDataOptions(labels, barValues, areaValues, filteringGu, coloringGu);

  return (
    <>
      <Container style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
        <Chart
          type='bar'
          options={options}
          data={data}
          ref={chartRef}
          onClick={onChartClickHandler}
        />
        <Container>
          <ButtonGroup
            orientation='vertical'
            aria-label='vertical contained button group'
            variant='text'
          >
            {buttons}
          </ButtonGroup>
        </Container>
      </Container>
    </>
  );
}
