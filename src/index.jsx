import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Routes, useParams } from 'react-router-dom';

import Header from './components/Header';
import HomeBanner from './components/Banner/homeBanner';
import AboutUsBanner from './components/Banner/aboutUsBanner';
import Footer from './components/Footer';
import Error from './components/Error';
import Home from './pages/Home';
import AboutUs from './pages/AboutUs';
import Logement from './pages/Logement';

import homeData from './data/homeData.json';

import './index.css';

const ids = homeData.map((item) => item.id);

function HomePage() {
  return (
    <div className='midSection'>
      <HomeBanner />
      <Home />
    </div>
  );
}

function AboutUsWrapper() {
  return (
    <div className='midSection'>
      <AboutUsBanner />
      <AboutUs />
    </div>
  );
}

function LogementWrapper() {
  const { id } = useParams(); // Récupérer l'ID depuis les paramètres d'URL
  console.log(id)

  if (ids.includes(id)) { // Test validité ID
    return <Logement />;
  } else {
    return <Error />;
  }
}

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/logement/:id" element={<LogementWrapper />} />
        <Route path="/a-propos" element={<AboutUsWrapper />} />
        <Route path="*" element={<Error />} />
      </Routes>
      <Footer />
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);
