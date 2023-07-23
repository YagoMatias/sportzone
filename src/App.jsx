import React from 'react';
import Header from './components/Header';
import './style/global.css';
import NavMenu from './components/NavMenu';
import Banner from './components/Banner';
import Produtos from './components/Produtos';
import { Container } from '@mui/material';

function App() {
  return (
    <Container maxWidth="xl" sx={{ bgcolor: '#121212' }}>
      <Container maxWidth="lg" sx={{ bgcolor: '#121212' }}>
        <Header />
        <NavMenu />
        <Banner />
        <Produtos />
      </Container>
    </Container>
  );
}

export default App;
