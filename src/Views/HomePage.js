import React, {useEffect, useState} from "react";
import axios from "axios";
import MovieList from "../Components/MovieList/MovieList";
import {API_KEY, BASE_URL} from "../config/config";
import Carousel from "../Components/Carusel/Carousel";
import Layout from "../Components/Layout/Layout";

const HomePage = () => {
    const [movies, setMovies] = useState([])
    const [trend, setTrend] = useState([])

    useEffect(() => {
        axios(`${BASE_URL}discover/movie?language=ru-RU&api_key=${API_KEY}`)
            .then(({data}) => setMovies(data.results))
    }, []);

    useEffect(() => {
        axios(`${BASE_URL}trending/movie/week?language=ru-RU&api_key=${API_KEY}`)
            .then(({data}) => setTrend(data.results))
    }, []);

    return (
        <Layout>
            <Carousel trend={trend}/>
                <section className={'movieList'}>
                    <div className={'container'}>
                        <MovieList movies={movies}/>
                    </div>
                </section>
        </Layout>

    )
}

export default HomePage