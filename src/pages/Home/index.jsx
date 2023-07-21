import homeData from '../../data/homeData.json';
import { Link } from 'react-router-dom';
import './home.css'



function Home() {

  console.log(homeData)
  
    return (

        <ul>
          {homeData.map((item)=> (
            <li  className ="home-list" key={item.id}>
              <Link to={`/logement/${item.id}`}>
              <img src={item.cover} alt={item.title} />
              <p>{item.title}</p>
            </Link>
            </li>
          ))}
        </ul>
    )

    
  }
  
  export default Home