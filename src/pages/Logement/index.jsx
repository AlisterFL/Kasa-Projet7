import { useParams } from 'react-router-dom'

function Logement() {
    const { id } = useParams()

    return (
        <div>
            <h1>Page Logement</h1>
            <h2> Logement id : {id} </h2>         
        </div>
    )
  }
  
  export default Logement