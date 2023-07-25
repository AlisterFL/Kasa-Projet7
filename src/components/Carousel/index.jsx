import React, { useState } from "react";
import { AiOutlineLeft, AiOutlineRight } from "react-icons/ai";

import "./Carousel.css";



export const Carousel = ({ data}) => {
    const [slide, setSlide] = useState(0);

    const nextSlide = () => {
        setSlide(slide === data.length -1 ? 0 : slide + 1);
    }

    const previousSlide = () => {
        setSlide(slide === 0 ? data.length -1 :slide - 1);
    }

    return (
        <div className="carousel">
            {data.length > 1 && <AiOutlineLeft className="arrow arrow-left" onClick={previousSlide} />}
            {data.map((item, idx) => {
                return <img src={item} key={idx} className={slide === idx ? "slide" : "slide slide-hidden"} />
            })}
            {data.length > 1 && <AiOutlineRight className="arrow arrow-right" onClick={nextSlide} />}
            {data.length > 1 && <span className="indicators">{slide + 1}/{data.length}</span>}
        </div>
    )
}

export default Carousel;

