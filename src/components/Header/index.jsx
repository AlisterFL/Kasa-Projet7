import { Link, useLocation } from 'react-router-dom';
import logo from '../../assets/logo.svg';
import './header.css';
import classNames from 'classnames';

function Header() {
  const location = useLocation();

  // Déterminez la classe CSS pour le lien actif en fonction de l'URL courante
  const activeLinkClass = (path) => classNames('header-link', {
    'active': location.pathname === path,
  });

  return (
    <header className="header-container">
      <Link to="/" className="header-logo">
        <img src={logo} alt="Logo" />
      </Link>
      <nav>
        <Link to="/" className={activeLinkClass('/')}>Accueil</Link>
        <Link to="/freelances" className={activeLinkClass('/freelances')}>A propos</Link>
      </nav>
    </header>
  );
}

export default Header;
