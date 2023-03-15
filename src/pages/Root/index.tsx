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
import { useEffect, useState } from 'react';
import { Chart } from 'react-chartjs-2';

import { coloringGuNames, filteringGuNames } from '@/utils/coloringGuNames';
import { FlexsysMockAPI } from '@/utils/fetch';

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

  // console.log('barValues', barValues);
  // console.log('chartDatas', chartDatas);
  // console.log('coloringGu', coloringGu);
  /* 
  1. 버튼을 클릭한다. (강남구)
  2. 강남구의 데이터만 필터한다.
  3. 강남구만 하이라이트가 되게 한다.
  */

  const onClickHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    const { name } = e.target;
    setFilteringGu(filteringGuNames(ids, name));
  };

  const buttons = [
    <Button key='one' onClick={onClickHandler} name='전체 보기'>
      전체 보기
    </Button>,
    <Button key='two' onClick={onClickHandler} name='성북구'>
      성북구
    </Button>,
    <Button key='three' onClick={onClickHandler} name='강남구'>
      강남구
    </Button>,
    <Button key='four' onClick={onClickHandler} name='노원구'>
      노원구
    </Button>,
    <Button key='five' onClick={onClickHandler} name='중랑구'>
      중랑구
    </Button>,
  ];

  const options = {
    interaction: {
      intersect: false,
      mode: 'index',
    },
    plugins: {
      legend: {
        position: 'top' as const,
      },
      title: {
        display: true,
        text: 'Chart.js Bar Chart',
      },
      tooltip: {
        callbacks: {
          title: function (data) {
            return `${ids[data[0].dataIndex]}`;
          },
        },
      },
    },
    scales: {
      x: {
        grid: {
          drawOnChartArea: false,
        },
      },
      bar: {
        min: 10000,
        max: 20000,
        position: 'left' as const,
      },
      area: {
        min: 0,
        max: 300,
        position: 'right' as const,
      },
    },
  };

  const data = {
    labels,
    datasets: [
      {
        type: 'bar' as const,
        label: 'barValue',
        data: barValues,
        backgroundColor: filteringGu.length !== 0 ? filteringGu : coloringGu,
        yAxisId: 'bar',
      },
      {
        type: 'line' as const,
        fill: true,
        label: 'areaValue',
        data: areaValues,
        backgroundColor: 'rgba(4, 37, 19, 0.5)',
        yAxisID: 'area',
        tension: 0.3,
        pointBorderColor: 'white',
        pointBackgroundColor: 'rgba(173, 30, 30, 0.5)',
      },
    ],
  };
  return (
    <>
      <Container style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
        <Chart type='bar' options={options} data={data} />
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
