import React from "react";
import {IMAGE_URL} from "../../config/config";
import {Link} from "react-router-dom";

function MovieList({movies}) {
    return (
        <div className={'row'}>
            {
                movies.map(movie =>
                    <div className={'col-3'} key={movie.id}>
                        <div className={'movie-box'}>
                            <Link to={`/movie/${movie.title}`}>
                                <img className={'poster-movie'} src={`${IMAGE_URL}${movie.poster_path}`} alt=""/>
                                <h2>{movie.title}</h2>
                            </Link>
                            <p>{movie.release_date}</p>
                            <h5>{movie.vote_average}</h5>
                        </div>
                    </div>
                )
            }
        </div>
    )
}

export default MovieList