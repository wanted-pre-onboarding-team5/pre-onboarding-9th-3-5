import Radio, { radioClasses } from '@mui/joy/Radio';
import RadioGroup from '@mui/joy/RadioGroup';
import Sheet from '@mui/joy/Sheet';

import { CHART_FILTER } from '@/constants/chart';

interface FilterProps {
  currentFilter: string;
  onClick: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const ChartFilter = ({ currentFilter, onClick }: FilterProps) => {
  return (
    <>
      <RadioGroup
        aria-labelledby='filter'
        value={currentFilter}
        onChange={onClick}
        sx={{ gap: 2, mb: 2, flexWrap: 'wrap', flexDirection: 'row' }}
      >
        {CHART_FILTER.map(({ name, bg }) => (
          <Sheet
            key={name}
            sx={{
              position: 'relative',
              width: 80,
              height: 40,
              flexShrink: 0,
              borderRadius: '20px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              bgcolor: bg,
              '--joy-focus-outlineOffset': '4px',
              '--joy-palette-focusVisible': (theme) => theme.vars.palette.neutral.outlinedBorder,
              [`& .${radioClasses.checked}`]: {
                [`& .${radioClasses.label}`]: {
                  fontWeight: 'lg',
                },
                [`& .${radioClasses.action}`]: {
                  '--variant-borderWidth': '2px',
                  borderColor: 'text.secondary',
                },
              },
              [`& .${radioClasses.action}.${radioClasses.focusVisible}`]: {
                outlineWidth: '2px',
              },
            }}
          >
            <Radio color='neutral' overlay disableIcon value={name} label={name} />
          </Sheet>
        ))}
      </RadioGroup>
    </>
  );
};

export default ChartFilter;
