import React, {useEffect, useState} from "react";
import {useParams} from "react-router-dom";
import axios from "axios";
import {API_KEY, BACKDROP_URL, BASE_URL} from "../config/config";
import MovieList from "../Components/MovieList/MovieList";

const MoviePage = () => {
    const {name} = useParams()
    const [movie, setMovie] = useState([])

    useEffect(() => {
        axios(`${BASE_URL}search/movie?language=ru-RU&api_key=${API_KEY}&query=${name}`)
            .then(({data}) => {
                setMovie(data.results)
                console.log(data.results)
            })
    }, [name]);

    return (
        <section className={'moviePage'}>
            <h2>{name}</h2>
            {movie.map((movieInfo) => (
                <div key={movieInfo.id}>
                    <img className={'backdrop'}  src={`${BACKDROP_URL + movieInfo.backdrop_path}`} alt=""/>
                    <h2>{movieInfo.title}</h2>
                    <p>{movieInfo.overview}</p>
                    <p>{movieInfo.release_date}</p>
                </div>
            ))}
        </section>
    )
}

export default MoviePage