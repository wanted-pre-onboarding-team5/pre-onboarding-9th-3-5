import { Button, Menu, MenuItem } from '@mui/material';
import { Box } from '@mui/system';
import React from 'react';
import { useNavigate } from 'react-router-dom';

import type { Id } from '@/types/responseData';

import { CHART_BG_COLOR } from '@/constants/chart';

type FilterByIDProps = {
  selectedId: Id | undefined;
};

function FilterByID({ selectedId }: FilterByIDProps) {
  const navigate = useNavigate();
  const [anchorEl, setAnchorEl] = React.useState<HTMLElement | null>(null);
  const open = Boolean(anchorEl);

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(null);
    navigate(`?selectedId=${event.currentTarget.innerText}`);
  };

  const resetSelectedID = () => {
    navigate(`/`);
  };

  return (
    <Box>
      <Button
        variant='outlined'
        id='basic-button'
        aria-controls={open ? 'basic-menu' : undefined}
        aria-haspopup='true'
        aria-expanded={open ? 'true' : undefined}
        onClick={handleClick}
      >
        지역: {selectedId || '모두'}
      </Button>
      <Menu
        id='basic-menu'
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          'aria-labelledby': 'basic-button',
        }}
      >
        {Object.keys(CHART_BG_COLOR).map((id) => (
          <MenuItem key={id} onClick={handleClose}>
            {id}
          </MenuItem>
        ))}
      </Menu>
      <Button variant='contained' onClick={resetSelectedID} sx={{ marginLeft: '1rem' }}>
        리셋
      </Button>
    </Box>
  );
}

export default FilterByID;
