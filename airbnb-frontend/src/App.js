import React from 'react';
import './sass/base.scss';
import { BrowserRouter as Router } from 'react-router-dom';
import Header from './components/organisms/Header/Header';
import Routes from './components/Routes';
import Footer from './components/organisms/Footer/Footer';

export default function App() {
  return (
    <Router>
      <Header />
      <Routes />
      <Footer />
    </Router>
  );
}
