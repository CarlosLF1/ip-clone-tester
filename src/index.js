import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import "leaflet/dist/leaflet.css";
import Footer from './components/Footer/Footer';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  
     <BrowserRouter>
      <Routes>
        <Route path='/' element={<App />} />
        </Routes>
        <Footer />
  </BrowserRouter>
  
);


