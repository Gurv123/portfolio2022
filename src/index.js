import React from 'react';
import ReactDOM from 'react-dom';
import Header from './components/header/Header'
import Footer from './components/footer/Footer'
import Main from './components/mainContent/Main'
import ScrollTopBtn from './components/utils/ScrollTopBtn'
import './style/index.css'

ReactDOM.render(
  <div>
    <Header />
    <Main />
    <Footer />
    <ScrollTopBtn />
  </div>,
  document.getElementById('root')
);
