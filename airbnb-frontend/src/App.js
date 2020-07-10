import React from 'react';
import './sass/App.scss';
import { BrowserRouter as Router } from 'react-router-dom';
import Header from './components/Header';
import Routes from './components/Routes';

export default function App() {
  return (
      <Router>
        <Header />
        <Routes />
      </Router>
  );
}
