import { Container } from '@mui/material';
import React from 'react';
import Manutencao from '../components/Manutencao';

const Selecao = () => {
  return (
    <Container maxWidth="xl" sx={{ bgcolor: 'yellow' }}>
      <Container maxWidth="lg" sx={{ bgcolor: 'yellow' }}>
        <Manutencao />
      </Container>
    </Container>
  );
};

export default Selecao;
