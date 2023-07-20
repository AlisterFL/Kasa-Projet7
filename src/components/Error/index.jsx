import { Link } from 'react-router-dom';
import './error.css'

function Error() {
    return (
        <div className='Error-div'>
            <div className='Error'>
                <h1>404</h1>
                <p>Oups! La page que vous demandez n'existe pas</p>     
            </div>
            <div className='Redirect'>
                <Link to="/" className='Redirect-link'>Retourner sur la page d'accueil</Link>
            </div>
        </div>
    )
}
 
export default Error