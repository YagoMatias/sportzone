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
import { NavLink } from 'react-router-dom';
import '../style/global.css';

const NavMenu = () => {
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down('sm'));

  return (
    <Box
      display="flex"
      justifyContent="center"
      alignItems="center"
      marginTop={1}
      marginBottom={2}
    >
      <ButtonGroup
        variant="contained"
        color="inherit"
        aria-label="button group"
        size={isSmallScreen ? 'small' : 'medium'}
      >
        <Tooltip
          title="Home"
          arrow
          sx={{
            color: 'white',
            bgcolor: '#121212',
            '&:hover': {
              bgcolor: 'gray',
            },
          }}
        >
          <Button>
            <NavLink className="navLink" to="/">
              Home
            </NavLink>
          </Button>
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
          <Button>
            <NavLink className="navLink" to="brasileiro">
              Brasileiro
            </NavLink>
          </Button>
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
          <Button>
            <NavLink className="navLink" to="internacional">
              Internacional
            </NavLink>
          </Button>
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
          <Button>
            <NavLink className="navLink" to="selecao">
              Seleção
            </NavLink>
          </Button>
        </Tooltip>
      </ButtonGroup>
    </Box>
  );
};

export default NavMenu;
