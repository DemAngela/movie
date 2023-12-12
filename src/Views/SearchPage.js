import React, {useEffect, useState} from 'react';
import MovieList from "../Components/MovieList/MovieList";
import {useParams} from "react-router-dom";
import {useLocation} from "react-router-dom";
import {API_KEY, BASE_URL} from "../config/config";
import axios from "axios";
import Layout from "../Components/Layout/Layout";
import Pagination from "../Components/Pagination/Pagination";

const SearchPage = () => {
    const location = useLocation();
    const queryParams = new URLSearchParams(location.search);
    const query = queryParams.get('query');

    const [movies, setMovies] = useState([]);

    useEffect(() => {
        if (query) {
            axios(`${BASE_URL}search/movie?api_key=${API_KEY}&language=ru-RU&query=${query}&page=1&include_adult=false`)
                .then(({data}) => {
                    setMovies(data.results);
                    console.log(data)
                })
        }
    }, [query])

    return (
        <Layout>
            <div className={'SearchPage'}>
                <div className="container">
                    <MovieList movies={movies}/>
                </div>
            </div>
        </Layout>
    );
};

export default SearchPage;