import { Container } from '@mui/material';
import React from 'react';
import NacionalProdutos from '../components/NacionalProdutos';

const Brasileiro = ({ searchTerm }) => {
  return (
    <>
      <Container maxWidth="xl" sx={{ bgcolor: '#121212' }}>
        <Container maxWidth="lg" sx={{ bgcolor: '#121212' }}>
          <NacionalProdutos searchTerm={searchTerm} />
        </Container>
      </Container>
    </>
  );
};

export default Brasileiro;
