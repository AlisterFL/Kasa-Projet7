import React, { useState } from 'react';
import './aboutUs.css'

function BoxWithDescription({ title, description }) {
    const [isOpen, setIsOpen] = useState(false);
  
    const toggleDescription = () => {
      setIsOpen(!isOpen);
    };
  
    return (
      <div className={`box ${isOpen ? 'open' : ''}`} onClick={toggleDescription}>
        <div className="title">{title}</div>
        {isOpen && <div className="description">{description}</div>}
        <div className={`arrow ${isOpen ? 'open' : ''}`}> ^ </div>
      </div>
    );
  }


function Home() {
    return (
     <div className="Box">
      <BoxWithDescription
        title="Fiabilité"
        description="Les annonces postées sur Kasa garantissent une fiabilité totale. Les photos sont conformes aux logements, et toutes les informations sont régulièrement vérifiées par nos équipes."
      />
      <BoxWithDescription
        title="Respect"
        description="La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de perturbation du voisinage entraînera une exclusion de notre plateforme."
      />
      <BoxWithDescription
        title="Service"
        description="Nos équipes se tiennent à votre disposition pour vous fournir une expérience parfaite. N'hésitez pas à nous contacter si vous avez la moindre question."
      />
      <BoxWithDescription
        title="Sécurité"
        description="La sécurité est la priorité de Kasa. Aussi bien pour nos hôtes que pour les voyageurs, chaque logement correspond aux critères de sécurité établis par nos services. En laissant une note aussi bien à l'hôte qu'au locataire, cela permet à nos équipes de vérifier que les standards sont bien respectés. Nous organisons également des ateliers sur la sécurité domestique pour nos hôtes."
      />
    </div>
    )
  }
  
  export default Home