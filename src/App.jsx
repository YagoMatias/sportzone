import React from 'react';
import Header from './components/Header';
import './style/global.css';
import NavMenu from './components/NavMenu';

function App() {
  return (
    <div className="layout">
      <Header />
      <NavMenu />
    </div>
  );
}

export default App;
