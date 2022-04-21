import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './global.css';
import Details from './pages/Details';
import Home from './pages/Home';//componente

const root = ReactDOM.createRoot(document.getElementById('root'));// tudo vai ficar dentro desse id root
root.render(
  <BrowserRouter>
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/details/:id' element={<Details/>}/>
    </Routes>
  </BrowserRouter>
);




