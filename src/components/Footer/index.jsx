import { Link } from 'react-router-dom';
import logo from '../../assets/logo-white.svg';
import './footer.css';

function Footer() {

    return (
      <footer className="footer-container">
        <Link to="/" className="footer-logo">
          <img className="logo-svg" src={logo} alt="Logo" />
        </Link>
        <h1 className='desc-footer'>© 2020 Kasa. All rights reserved</h1>
      </footer>
    );

}

export default Footer;
