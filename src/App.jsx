import React, { useState } from 'react';
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
import HomeProduto from './pages/Produto';
import Cart from './pages/Cart';
import Footer from './components/Footer';

function App() {
  const [searchTerm, setSearchTerm] = useState('');

  return (
    <BrowserRouter>
      <Container maxWidth="xl" sx={{ bgcolor: '#121212' }}>
        <Container maxWidth="lg" sx={{ bgcolor: '#121212' }}>
          <Header onSearch={(term) => setSearchTerm(term)} />
          <NavMenu />
          <Banner />
          <Routes>
            <Route path="/" element={<Home searchTerm={searchTerm} />} />
            <Route path="cart" element={<Cart />} />
            <Route
              path="brasileiro"
              element={<Brasileiro searchTerm={searchTerm} />}
            />
            <Route
              path="internacional"
              element={<Internacional searchTerm={searchTerm} />}
            />
            <Route path="selecao" element={<Selecao />} />
            <Route path="produto/:id" element={<HomeProduto />} />
            <Route path="/brasileiro/produto/:id" element={<HomeProduto />} />
            <Route
              path="/internacional/produto/:id"
              element={<HomeProduto />}
            />
          </Routes>
          <Footer />
        </Container>
      </Container>
    </BrowserRouter>
  );
}

export default App;
