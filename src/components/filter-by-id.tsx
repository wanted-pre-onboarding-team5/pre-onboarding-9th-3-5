import { Button, Menu, MenuItem } from '@mui/material';
import { Box } from '@mui/system';
import React from 'react';
import { useNavigate } from 'react-router-dom';

import type { IDType } from '@/types/mock-data';

import ID_COLOR_MAP from '@/constants/id-color';

type FilterByIDProps = {
  selectedID: IDType | undefined;
};

function FilterByID({ selectedID }: FilterByIDProps) {
  const navigate = useNavigate();
  const [anchorEl, setAnchorEl] = React.useState<HTMLElement | null>(null);
  const open = Boolean(anchorEl);

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(null);
    navigate(`?selectedID=${event.currentTarget.innerText}`);
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
        지역: {selectedID || '모두'}
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
        {Object.keys(ID_COLOR_MAP).map((id) => (
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
