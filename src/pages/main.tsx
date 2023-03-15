import { Container } from '@mui/system';
import { Chart } from 'react-chartjs-2';
import 'chart.js/auto';
import { useLoaderData, useLocation, useNavigate } from 'react-router-dom';

import type { MockData } from '@/types/mock-data';

import getChartColor from '@/helpers/get-chart-color';
import getChartData from '@/helpers/get-chart-data';
import getQueryData from '@/helpers/get-query-data';

const Main = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const queryData = getQueryData(location.search);
  const loaderData = useLoaderData() as MockData;
  const { labelArray, idArray, areaDataArray, barDataArray } = getChartData(loaderData);

  return (
    <Container>
      <Chart
        type='bar'
        data={{
          labels: labelArray,
          datasets: [
            {
              backgroundColor: getChartColor(idArray, queryData?.selectedID),
              type: 'bar' as const,
              label: 'value_bar',
              yAxisID: 'bar',
              data: barDataArray,
              borderWidth: 1,
            },
            {
              type: 'line' as const,
              label: 'value_area',
              yAxisID: 'line',
              data: areaDataArray,
              borderWidth: 1,
              fill: 'origin',
              pointStyle: false,
            },
          ],
        }}
        options={{
          //   maintainAspectRatio: false,
          //   responsive: false,
          interaction: {
            mode: 'index',
          },
          scales: {
            x: {
              grid: {
                drawOnChartArea: false,
              },
            },
            bar: {
              type: 'linear',
              display: true,
              position: 'left',
              min: 10000,
              max: 20000,
            },
            line: {
              display: true,
              position: 'right',
              min: 0,
              max: 100,
            },
          },
          onClick(event, elements, chart) {
            event;
            chart;
            navigate(`?selectedID=${idArray[elements[0].index]}`);
          },
          plugins: {
            tooltip: {
              callbacks: {
                title(tooltipItems) {
                  const tooltipItem = tooltipItems[0];
                  return `${tooltipItem.label} (id: ${idArray[tooltipItem.dataIndex]})`;
                },
              },
            },
          },
        }}
      />
    </Container>
  );
};

export default Main;
