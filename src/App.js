import React from 'react';
import ProductList from './components/product-list';
import TopBar from './components/top-bar';
import './App.css';

function App() {
  return (
    <>
      <TopBar className="top-bar" />
      <div className="container">
        <ProductList />
      </div>
    </>
  );
}

export default App;
