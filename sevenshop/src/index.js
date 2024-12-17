import React from 'react';
import ReactDOM from 'react-dom/client';
import Home from './routes/Home';
import Header from './assets/header/index.js';
import Products from './routes/Products';
import CartProducts from './routes/Cart';
import reportWebVitals from './reportWebVitals.js';
import { createGlobalStyle } from 'styled-components';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

const GlobalStyle = createGlobalStyle`

  * {
    margin: 0;
    padding: 0;
  }

  body {
    margin: 0;
    padding: 0;
    height: 100vh;
    font-family: Poppins, sans-serif;
    background: linear-gradient(0deg, rgba(15,12,41,1) 0%, rgba(48,43,99,1) 50%, rgba(15,12,41,1) 100%);
  }

  code {
    font-family: source-code-pro, Menlo, Monaco, Consolas, 'Courier New', monospace;
  }

  li {
    list-style: none;
  }

  ::-webkit-input-placeholder { 
    font-weight: bold;
}

`

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <GlobalStyle />
    <BrowserRouter>
      <Header/>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/produtos" element={<Products/>} />
        <Route path="/carrinho" element={<CartProducts/>} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your Home, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
