import React, {useEffect, useState} from "react";
import axios from "axios";
import MovieList from "../Components/MovieList/MovieList";
import {API_KEY, BASE_URL} from "../config/config";
import Carousel from "../Components/Carusel/Carousel";

const HomePage = () => {
    const [movies, setMovies] = useState([])

    useEffect(() => {
        axios(`${BASE_URL}discover/movie?language=ru-RU&api_key=${API_KEY}`)
            .then(({data}) => setMovies(data.results))
    }, []);

    return (
        <>
            <Carousel movies={movies} AverageThreshold={7.0}/>
                <section className={'movieList'}>
                    <div className={'container'}>
                        <MovieList movies={movies}/>
                    </div>
                </section>
        </>

    )
}

export default HomePage