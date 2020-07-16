import React from 'react';
import './sass/App.scss';
import { BrowserRouter as Router } from 'react-router-dom';
import Header from './components/Header';
import Routes from './components/Routes';
import Footer from './components/Footer';

export default function App() {
  return (
      <Router>
        <Header />
        <Routes />
        <Footer />
      </Router>
  );
}
