import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Routes, useParams } from 'react-router-dom';

import Header from './Header';
import HomeBanner from './Banner/homeBanner';
import AboutUsBanner from './Banner/aboutUsBanner';
import Footer from './Footer';
import Error from './Error';
import Home from '../pages/Home';
import AboutUs from '../pages/AboutUs';
import Logement from '../pages/Logement';

import homeData from '../data/homeData.json';



const ids = homeData.map((item) => item.id);
console.log(ids)

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
    return (
      <div className='midSection'>
        <Logement />
      </div>
    )
  } else {
    return (
      <div className='midSection'>
        <Error />;
      </div>
    )
  }
}

function App() {
    return(

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
    )
}

export default App