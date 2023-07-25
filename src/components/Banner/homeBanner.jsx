import React from 'react';
import background from '../../assets/landscape-sea.png';
import './banner.css';

function Banner() {
    return (
      <div className="banner-container">
        <img src={background} alt="paysage côtier avec la mer" className="banner-image" />
        <div className="text-overlay">
          <h2>Chez vous,<span className="break"><br /></span>partout et ailleurs</h2>
        </div>
      </div>
    );
}

export default Banner;
