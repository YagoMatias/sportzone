import React from 'react';
import {
  Tooltip,
  Button,
  ButtonGroup,
  useMediaQuery,
  useTheme,
  Box,
} from '@mui/material';
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';

const NavMenu = () => {
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down('sm'));

  return (
    <Box display="flex" justifyContent="center" alignItems="center">
      <ButtonGroup
        variant="text"
        color="success"
        aria-label="button group"
        size={isSmallScreen ? 'small' : 'medium'}
      >
        <Tooltip
          title="Início"
          arrow
          sx={{
            color: 'white',
            bgcolor: '#121212',
            '&:hover': {
              bgcolor: 'gray',
            },
          }}
        >
          <Button>Ínicio</Button>
        </Tooltip>
        <Tooltip
          title="Brasileiro"
          arrow
          sx={{
            color: 'white',
            bgcolor: '#121212',
            '&:hover': {
              bgcolor: 'gray',
            },
          }}
        >
          <Button>Brasileiro</Button>
        </Tooltip>
        <Tooltip
          title="Internacional"
          arrow
          sx={{
            color: 'white',
            bgcolor: '#121212',
            '&:hover': {
              bgcolor: 'gray',
            },
          }}
        >
          <Button>Internacional</Button>
        </Tooltip>
        <Tooltip
          title="Seleção"
          arrow
          sx={{
            color: 'white',
            bgcolor: '#121212',
            '&:hover': {
              bgcolor: 'gray',
            },
          }}
        >
          <Button>Seleção</Button>
        </Tooltip>
      </ButtonGroup>
    </Box>
  );
};

export default NavMenu;
