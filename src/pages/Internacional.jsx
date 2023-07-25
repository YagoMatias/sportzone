import { Container } from '@mui/material';
import React from 'react';
import InternacionalProdutos from '../components/InternacionalProdutos';

const Internacional = ({ searchTerm }) => {
  return (
    <Container maxWidth="xl" sx={{ bgcolor: '#121212' }}>
      <Container maxWidth="lg" sx={{ bgcolor: '#121212' }}>
        <InternacionalProdutos searchTerm={searchTerm} />
      </Container>
    </Container>
  );
};

export default Internacional;
