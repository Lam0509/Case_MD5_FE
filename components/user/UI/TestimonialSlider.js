import React from "react";
import Slider from "react-slick";

import ava01 from "../../../assets/user/images/ava-1.jpg";
import ava02 from "../../../assets/user/images/ava-2.jpg";
import ava03 from "../../../assets/user/images/ava-3.jpg";

import styles from "../../../styles/user/slider.module.css"

const TestimonialSlider = () => {
    const settings = {
        dots: true,
        autoplay: true,
        inifinite: true,
        speed: 1000,
        autoplaySpeed: 3000,
        swipeToSlide: true,
        slidesToShow: 1,
        slidetoScroll: 1,
    };

    return (
        <Slider {...settings}>
            <div>
                <p className={styles.review__text}>
                    "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Porro
                    possimus facilis nihil, voluptate ad, alias quaerat odit ratione nisi
                    voluptas doloribus consectetur sit dolorum minus blanditiis quam eum
                    ea? Tenetur."
                </p>
                <div className="slider__content d-flex align-items-center gap-3">
                    <img src={ava01.src} alt="avatar" className={`${styles.slider__content__img}rounded`}/>
                    <h6 className={styles.slider__content__h6}>John Doe</h6>
                </div>
            </div>
            <div>
                <p className="review__text">
                    "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Porro
                    possimus facilis nihil, voluptate ad, alias quaerat odit ratione nisi
                    voluptas doloribus consectetur sit dolorum minus blanditiis quam eum
                    ea? Tenetur."
                </p>
                <div className="slider__content d-flex align-items-center gap-3">
                    <img src={ava02.src} alt="avatar" className={`${styles.slider__content__img}rounded`}/>
                    <h6 className={styles.slider__content__h6}>Kawasaki Jun</h6>
                </div>
            </div>
            <div>
                <p className="review__text">
                    "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Porro
                    possimus facilis nihil, voluptate ad, alias quaerat odit ratione nisi
                    voluptas doloribus consectetur sit dolorum minus blanditiis quam eum
                    ea? Tenetur."
                </p>
                <div className="slider__content d-flex align-items-center gap-3">
                    <img src={ava03.src} alt="avatar" className={`${styles.slider__content__img}rounded`}/>
                    <h6 className={styles.slider__content__h6}>Mitchell Marsh</h6>
                </div>
            </div>
        </Slider>
    );
};

export default TestimonialSlider;