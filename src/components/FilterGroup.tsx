import { Stack, Button } from '@mui/material';

export const FilterGroup = ({ onClick }: { onClick: (id: string) => void }) => {
  const filterData = [
    ['성북구', 'rgb(255, 139, 139)'],
    ['강남구', 'rgb(177, 254, 139)'],
    ['노원구', 'rgb(136, 255, 255)'],
    ['중랑구', 'rgb(216, 152, 255)'],
  ];

  return (
    <Stack direction='row' spacing={2} marginLeft={9} marginBottom={2}>
      <Button style={{ color: 'white', background: '#999' }} onClick={() => onClick('')}>
        전체
      </Button>
      {filterData.map(([id, color], i) => (
        <Button key={i} style={{ color: 'white', background: color }} onClick={() => onClick(id)}>
          {id}
        </Button>
      ))}
    </Stack>
  );
};
