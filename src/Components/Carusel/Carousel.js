import React, { useRef, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';

import './Carusel.css';

// import required modules
import { EffectCoverflow, Pagination, Autoplay } from 'swiper/modules';
import { IMAGE_URL} from "../../config/config";

function Carousel({movies, AverageThreshold}) {

    return (
        <>
            <Swiper
                effect={'coverflow'}
                grabCursor={true}
                centeredSlides={true}
                slidesPerView={"auto"}
                loop={true}
                autoplay={{
                    delay: 2000,
                    disableOnInteraction: false,
                }}
                coverflowEffect={{
                    rotate: 50,
                    stretch: 0,
                    depth: 100,
                    modifier: 1,
                    slideShadows: true,
                }}
                // pagination={true}
                modules={[EffectCoverflow, Pagination, Autoplay]}
                className="mySwiper"
            >
                    {
                        movies.filter(movie => movie.vote_average >= AverageThreshold)
                            .map(movie => (
                                <SwiperSlide key={movie.id}>
                                    <img src={IMAGE_URL + movie.poster_path} alt="" />
                                </SwiperSlide>
                            ))
                    }
            </Swiper>
        </>
    );
}

export default Carousel
