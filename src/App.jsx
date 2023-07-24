import React from 'react';
import Header from './components/Header';
import './style/global.css';
import NavMenu from './components/NavMenu';
import { Container } from '@mui/material';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Brasileiro from './pages/Brasileiro';
import Internacional from './pages/Internacional';
import Selecao from './pages/Selecao';
import Banner from './components/Banner';

function App() {
  return (
    <BrowserRouter>
      <Container maxWidth="xl" sx={{ bgcolor: '#121212' }}>
        <Container maxWidth="lg" sx={{ bgcolor: '#121212' }}>
          <Header />
          <NavMenu />
          <Banner />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="brasileiro" element={<Brasileiro />} />
            <Route path="internacional" element={<Internacional />} />
            <Route path="selecao" element={<Selecao />} />
          </Routes>
        </Container>
      </Container>
    </BrowserRouter>
  );
}

export default App;
