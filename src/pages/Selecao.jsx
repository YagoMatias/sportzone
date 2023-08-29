import { Container } from '@mui/material';
import React from 'react';
import SelecaoProdutos from '../components/SelecaoProdutos';

const Selecao = ({ searchTerm }) => {
  return (
    <Container maxWidth="xl" sx={{ bgcolor: '#121212' }}>
      <Container maxWidth="lg" sx={{ bgcolor: '#121212' }}>
        <SelecaoProdutos searchTerm={searchTerm} />
      </Container>
    </Container>
  );
};

export default Selecao;
