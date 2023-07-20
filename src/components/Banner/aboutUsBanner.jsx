import background from '../../assets/landscape-mountain.png';
import './banner.css'

function Banner() {
    return (
      <div className="banner-container">
        <img src={background} alt="paysage montagneux" className="banner-image" />
      </div>
    );
  }
 
export default Banner