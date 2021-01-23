/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect } from "react";
import Swiper, { Mousewheel, A11y, HashNavigation } from "swiper";

import CarouselStyles, { CarouselItem, SwiperSlide } from "./carousel.styles";

import "swiper/swiper.min.css";

Swiper.use([Mousewheel, A11y, HashNavigation]);

interface SwipperProps extends Element {
    swiper?: any;
}

type SlideProps = {
    hash: string;
    slide: any;
};

type CarouselProps = {
    slidesLeft: SlideProps[];
    slidesRight: SlideProps[];
    totalIndexes: number;
};

const Carousel = ({ slidesLeft, slidesRight, totalIndexes }: CarouselProps) => {
    const [swiperLeft, setSwiperLeft] = useState(null);
    const [swiperRight, setSwiperRight] = useState(null);

    const createSwiper = (id, invert = false, inital = 0) => {
        new Swiper(id, {
            speed: 800,
            initialSlide: inital,
            slidesPerView: 1,
            spaceBetween: 0,
            direction: "vertical",
            mousewheel: {
                invert: invert,
            },
            pagination: false,
            hashNavigation: {
                watchState: true,
            },
        });
    };

    useEffect(() => {
        createSwiper("#swiper-left");
        createSwiper("#swiper-right", true, totalIndexes);

        const swLeft = document.querySelector<SwipperProps>("#swiper-left")
            .swiper;
        const swRight = document.querySelector<SwipperProps>("#swiper-right")
            .swiper;

        setSwiperLeft(swLeft);
        setSwiperRight(swRight);
    }, []);

    useEffect(() => {
        if (swiperLeft && swiperRight) {
            swiperLeft.on("slideChange", (swiper) => {
                const rightTotal = swiperRight.slides.length - 1;
                swiperRight.slideTo(rightTotal - swiper.activeIndex);
            });

            swiperRight.on("slideChange", (swiper) => {
                const leftTotal = swiperLeft.slides.length - 1;
                swiperLeft.slideTo(leftTotal - swiper.activeIndex);
            });
        }
    }, [swiperLeft, swiperRight]);

    return (
        <CarouselStyles>
            <CarouselItem>
                <div className="swiper-container" id="swiper-left">
                    <div className="swiper-wrapper">
                        {slidesLeft.map((item) => (
                            <div className="swiper-slide" data-hash={item.hash}>
                                <SwiperSlide>{item.slide}</SwiperSlide>
                            </div>
                        ))}
                    </div>
                </div>
            </CarouselItem>
            <CarouselItem>
                <div className="swiper-container" id="swiper-right">
                    <div className="swiper-wrapper">
                        {slidesRight.map((item) => (
                            <div className="swiper-slide" data-hash={item.hash}>
                                <SwiperSlide>{item.slide}</SwiperSlide>
                            </div>
                        ))}
                    </div>
                </div>
            </CarouselItem>
        </CarouselStyles>
    );
};

export default Carousel;
