import React, { useState } from 'react';
import './Slider.scss';

function Slider({ images }) {
    const [currentSlide, setCurrentSlide] = useState(0);
    const translateValue = `translateX(${-100 * currentSlide}%)`;

    const handlePrevious = () => {
        setCurrentSlide((prevVal) => (prevVal < 1 ? 0 : prevVal - 1));
    };
    const handleNext = () => {
        const maxVal = images.length - 1;
        setCurrentSlide((prevVal) => (prevVal >= maxVal ? maxVal : prevVal + 1));
    };

    return (
        <div className="slider">
            <div className="nav-button slider__left" onClick={handlePrevious}>
                <i className="fas fa-chevron-left" />
            </div>
            <div className="slider__box">
                <div className="slider__track" style={{ transform: translateValue }}>
                    {images.map((image, i) => (
                        <img key={i} src={image} alt="" />
                    ))}
                </div>
            </div>
            <div className="nav-button slider__right" onClick={handleNext}>
                <i className="fas fa-chevron-right" />
            </div>
        </div>
    );
}

export default Slider;
