import React, {useEffect, useRef, useState} from 'react';
import {Swiper, SwiperSlide} from 'swiper/react';

import './Carusel.css';
import {BACKDROP_URL} from "../../config/config";
import button from '../assets/b.png'


import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';


import {Parallax, Pagination, Navigation, Autoplay} from 'swiper/modules';
import {Link} from "react-router-dom";

function Carousel({trend}) {
    return (
        <>
            <Swiper
                style={{
                    '--swiper-navigation-color': '#fff',
                    '--swiper-pagination-color': '#fff',
                }}
                speed={600}
                parallax={true}
                // pagination={{
                //     clickable: true,
                // }}
                autoplay={{
                    delay: 5000,
                    disableOnInteraction: false,
                }}
                navigation={true}
                modules={[Parallax, Pagination, Navigation, Autoplay]}
                className="mySwiper"

            >
                {
                    trend.map((movie => (
                        <SwiperSlide key={movie.id}>
                            <div key={movie.id}
                                 slot="container-start"
                                 className="parallax-bg"
                                 style={{
                                     backgroundImage:
                                         `url(${BACKDROP_URL}${movie.backdrop_path})`,
                                     width: '100%',
                                     objectFit: 'cover'
                                 }}
                                 data-swiper-parallax="-23%"

                            ></div>

                            <div className={'glass'} data-swiper-parallax="-400">
                                <div className="title" data-swiper-parallax="-300">
                                    <h1>{movie.title}</h1>
                                </div>
                                <div className="text" data-swiper-parallax="-100">
                                    <p>
                                        {movie.overview}
                                    </p>
                                </div>
                                <div>
                                    <Link to={`/movie/${movie.id}`}>
                                        <button className={'play'}>
                                            <img src={button} alt=""/>
                                        </button>
                                    </Link>
                                </div>
                            </div>
                        </SwiperSlide>
                    )))
                }
            </Swiper>
        </>
    )
        ;
}


export default Carousel
