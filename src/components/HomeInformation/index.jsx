import React from "react";
import './HomeInformation.css'
import { AiFillStar  } from "react-icons/ai";
import BoxWithDescription from '../../tools/box'


function HomeInformation({ data }) {
    //Tags system
    const tagsList = data.tags.map((tag, index) => (
        <li key={index}>{tag}</li>
      ));

      //Rating system 
      let stars = [];

      for (let i = 0; i < 5; i++) {
        if (i < data.rating) {
          stars.push(<AiFillStar className="star" key={i}/>);
        } else {
          stars.push(<AiFillStar className="star-empty" key={i}/>);
        }
      }

      const nameHost = data.host.name.split(" ")

    return(
        
        <div className="bloc-info">
            <div className="first-bloc">


                <div className="title-bloc">
                    <h1> {data.title} </h1>
                    <h3> {data.location} </h3>
                    <div className="tags">
                        <ul>{tagsList}</ul>
                    </div>
                </div>
                <div className="host-rating-bloc">

                    <div className="host-bloc">
                        <div className="nameHost">
                            <h4> {nameHost[0]} </h4>
                            <h4> {nameHost[1]}</h4>
                        </div>
                        <img src= {data.host.picture} alt="profil picture" />
                    </div>
                    <div className="rating">
                        {stars}
                    </div>
                </div>

            </div>
            
            <div className="second-bloc">
            <BoxWithDescription 
                className="description-bloc"
                title="Description"
                description= {data.description}
                initialOpen={true}
            />
            <BoxWithDescription 
            className="equipment-bloc"
                title="Équipements"
                description= {data.equipments.map((value,index) => (
                    <li key={index}>{value}</li>
                ))}
                initialOpen={true}
            />
            </div>
        </div>
    )
}

export default HomeInformation