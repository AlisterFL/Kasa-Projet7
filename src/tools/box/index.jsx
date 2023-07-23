import React, { useState } from 'react';
import { AiOutlineUp } from "react-icons/ai";

function BoxWithDescription({ className = '', title, description, initialOpen = false }) {
    const [isOpen, setIsOpen] = useState(initialOpen);
  
    const handleToggle = () => {
      setIsOpen(!isOpen);
    };
  
    return (
      <div
        className={`box ${isOpen ? 'open' : ''} ${className ? ' ' + className : ''}`} 
        onClick={handleToggle}
      >
        <div className="title">{title}</div>
        {isOpen && <div className="description">{description}</div>}
        <div className={`arrow ${isOpen ? 'open' : ''}`}> <AiOutlineUp /> </div>
      </div>
    );
  }

  export default BoxWithDescription