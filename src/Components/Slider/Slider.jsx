import React, { useEffect, useRef, useState } from "react";
import "./slider.css";
import SliderCard from "./SliderCard";
import img1 from "../img/section2/img1.webp";
import img2 from "../img/section2/img2.webp";
import img3 from "../img/section2/img3.webp";
import img4 from "../img/section2/img4.webp";

const Slider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [totalSlides, setToatlSlides] = useState(0);
  const [intervalId, setIntervalId] = useState(null);
  let sliderRef = useRef(null);

  //Setting Total Slides
  useEffect(() => {
    const slider = sliderRef.current;
    const slides = slider.querySelectorAll(".slides");

    setToatlSlides(slides.length);

    //Setting Entire slider's width
    // const width = 1280 * totalSlides;
    // slider.style.width = `${width}px`;
  }, [totalSlides]);

  //Automatic sliding
  useEffect(() => {
    const id = setInterval(() => {
      if (currentSlide < totalSlides - 1) {
        setCurrentSlide((prevSlide) => prevSlide + 1);
      } else {
        setCurrentSlide(0);
      }
    }, 5000);

    setIntervalId(id);

    return () => {
      if (id) {
        clearInterval(id);
      }
    };
  }, [totalSlides, currentSlide]);
  //Total slides used in parameter above to initialize Slide looping
  //without clicking on the next button

  useEffect(() => {
    let slider = sliderRef.current;
    const sliderLength = slider.getBoundingClientRect().width;

    const goToSlide = (sl) => {
      // slides.forEach((slide, i) => {
      //   slide.style.transform = `translateX(${100 * (i - sl)}%)`;
      // });

      slider.style.transform = `translateX(-${
        sl * (sliderLength / totalSlides)
      }px)`;
    };

    goToSlide(currentSlide);
  }, [currentSlide]);

  const nextSlide = () => {
    if (currentSlide < totalSlides - 1) {
      setCurrentSlide((prevSlide) => prevSlide + 1);
    } else {
      setCurrentSlide(0);
    }
  };

  const prevSlide = () => {
    if (currentSlide < totalSlides - 1) {
      setCurrentSlide((prevSlide) => prevSlide - 1);
    } else {
      setCurrentSlide(0);
    }
  };

  return (
    <div className="section--5">
      <div ref={sliderRef} className="slider d-flex">
        <SliderCard
          name="Natasha Baid"
          rating={`⭐⭐⭐⭐⭐`}
          review={`Nice Product. Worth for it's money!`}
          img={img1}
        />

        <SliderCard
          name="Priyanka Jaiswal"
          rating={`⭐⭐⭐⭐`}
          review={`Nice Product. Worth for it's money!`}
          img={img2}
        />

        <SliderCard
          name="Nithya Nair"
          rating={`⭐⭐⭐⭐⭐`}
          review={`Nice Product. Worth for it's money!`}
          img={img3}
        />

        <SliderCard
          name="Ananya Sen"
          rating={`⭐⭐⭐⭐⭐`}
          review={`Nice Product. Worth for it's money!`}
          img={img4}
        />
      </div>

      <div className="left-btn-cont">
        <button
          className="slider-btn slider-btn-left btn "
          onClick={() => {
            prevSlide();
          }}
        >
          <i className="bi bi-chevron-left"></i>
        </button>
      </div>

      <div className="right-btn-cont">
        <button
          className=" slider-btn  slider-btn-right btn "
          onClick={() => {
            nextSlide();
          }}
        >
          <i className="bi bi-chevron-right"></i>
        </button>
      </div>
    </div>
  );
};

export default Slider;

//  <img className="slide-img" src={img1} />
// <img className="slide-img" src={img2} />
// <img className="slide-img" src={img3} />
// <img className="slide-img" src={img4} />
