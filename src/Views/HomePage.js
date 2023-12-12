import React, {useEffect, useState} from "react";
import axios from "axios";
import MovieList from "../Components/MovieList/MovieList";
import {API_KEY, BASE_URL} from "../config/config";
import Carousel from "../Components/Carusel/Carousel";
import Layout from "../Components/Layout/Layout";
import {useSearchParams} from "react-router-dom";
import Pagination from "../Components/Pagination/Pagination";

const HomePage = () => {
    const [movies, setMovies] = useState([])
    const [trend, setTrend] = useState([])
    const [pageParam, setPageParams] = useSearchParams('page')
    const [page, setPage] = useState(pageParam.get('page') || 1)

    useEffect(() => {
        axios(`${BASE_URL}discover/movie?language=ru-RU&api_key=${API_KEY}&page=${page}`)
            .then(({data}) => setMovies(data.results))
    }, [page]);

    const handleChangePage = (argPage) => {
        setPage(argPage)
        setPageParams({page: argPage})
    }

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
                        <Pagination onClick={handleChangePage}/>
                    </div>
                </section>
        </Layout>

    )
}

export default HomePage