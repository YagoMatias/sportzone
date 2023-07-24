import { Container } from '@mui/material';
import React from 'react';
import InternacionalProdutos from '../components/InternacionalProdutos';

const Internacional = () => {
  return (
    <Container maxWidth="xl" sx={{ bgcolor: '#121212' }}>
      <Container maxWidth="lg" sx={{ bgcolor: '#121212' }}>
        <InternacionalProdutos />
      </Container>
    </Container>
  );
};

export default Internacional;
