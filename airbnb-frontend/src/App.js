import React from "react";
import "./sass/App.scss";
import Header from "./components/Header";
import Routes from "./components/Routes";
import Footer from "./components/Footer";

import { BrowserRouter as Router } from "react-router-dom";

export default function App() {
  return (
    <Router>
      <Header />
      <Routes />
      <Footer />
    </Router>
  );
}