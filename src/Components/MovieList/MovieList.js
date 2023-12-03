import React from "react";
import {IMAGE_URL} from "../../config/config";
import {Link, useNavigate} from "react-router-dom";
import './MovieList.css'

function MovieList({movies}) {
    const navigation = useNavigate()

    const handleNavigation = (id) => {
        navigation(`/movie/${id}`)
    }

    return (
        <div className={'row'}>
            {
                movies.map(movie =>
                    <div className={'col-3'} key={movie.id}>
                        <div key={movie.id} className={'movie-box'} onClick={() => handleNavigation(movie.id)}>
                            <img className={'poster-movie'} src={`${IMAGE_URL}${movie.poster_path}`} alt=""/>
                            <h2 className={'movie-title'}>{movie.title}</h2>
                            <p className={'movie-subtitle'}>{movie.release_date}</p>
                            <h5 className={'movie-reiting'}>{movie.vote_average}</h5>
                        </div>
                    </div>
                )
            }
        </div>
    )
}

export default MovieList