// import React from 'react'
import { useParams } from 'react-router-dom'
import homesData from '../../data/homeData.json'
import Carousel from '../../components/Carousel'
import HomeInformation from '../../components/HomeInformation'

function Logement() {
    const { id } = useParams()
    console.log("id : " + id)

    const homeData = homesData.find((objet) => objet.id === id);

    return (
        <div>
            <Carousel data= {homeData.pictures}/>
            <HomeInformation data= {homeData}/>
            <h2> Logement id : {id} </h2>  

        </div>
    )
  }
  
  export default Logement