import React, {useEffect, useState} from "react";
import {useParams} from "react-router-dom";
import axios from "axios";
import {API_KEY, BACKDROP_URL, BASE_URL, IMAGE_URL} from "../config/config";
import Layout from "../Components/Layout/Layout";



const MoviePage = () => {
    const {id} = useParams()
    const [movie, setMovie] = useState({})
    const [img, setImg] = useState({})
    const [actors, setActors] = useState([])
    const [videos, setVideos] = useState([])
    const [poster, setPoster] = useState({})
    const numberOfActorsToShow = 6

    useEffect(() => {
        axios(`${BASE_URL}movie/${id}?api_key=${API_KEY}&language=ru-RU`)
            .then(({data}) => {
                setMovie(data)
                // console.log(data)
            })
    }, [id]);

    useEffect(() => {
        axios(`${BASE_URL}movie/${id}/images?api_key=${API_KEY}`)
            .then(({data}) => {
                setImg(data.backdrops)
                setPoster(data.posters)
                // console.log(data)
            })
    }, [id]);

    useEffect(() => {
        axios(`${BASE_URL}movie/${id}/credits?language=ru-RU&api_key=${API_KEY}`)
            .then(({data}) => {
                setActors(data.cast)
                console.log(data.cast)
            })
    }, [id]);

    const visibleActors = actors.slice(0, numberOfActorsToShow)

    useEffect(() => {
        axios(`${BASE_URL}movie/${id}/videos?language=ru-RU&api_key=${API_KEY}`)
            .then(({data}) => {
                setVideos(data.results)
                // console.log(data.results)
            })
    }, [id]);


    return (
        <Layout>
            <section className={'movieWrapper'}
                     style={{
                         backgroundImage: img.length > 0 ? `url(${BACKDROP_URL}${img[0].file_path})` : '',
                         backgroundSize: 'cover',
                         backgroundPosition: 'center',
                     }}>
                <div className="container">
                    <div className={'movieInner'}>
                        <div className={'movieCardTitle'}>
                            <h2>{movie.title}</h2>
                            <p>{movie.release_date}</p>
                        </div>
                        <div className={'movieCardPoster'}>
                            <img className={'poster'}
                                 src={poster.length > 0 ? `${BACKDROP_URL}${poster[1].file_path}` : ''}
                                 alt=""/>
                            <div className={'movieCardPosterInner'}>
                                <div>
                                    <p>{movie.overview}</p>
                                </div>
                                <div className={'actors'}>
                                    <div className="row">
                                        {
                                            visibleActors.map(actor => (
                                                <div className={'col-2'} key={actor.id}>
                                                    <div className="actorBox">
                                                        <img className={'actorImg'} src={`${IMAGE_URL}${actor.profile_path}`} alt=""/>
                                                        <h5>{actor.name}</h5>
                                                        <p>{actor.character}</p>
                                                    </div>
                                                </div>
                                            ))
                                        }
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className={'movieCardTrailer'}>
                            <div className="row">
                                {
                                    videos.map(videoItem => (
                                        <div className="col-5" key={videoItem.key}>
                                            <div className="videoBox">
                                                <iframe
                                                    title={videoItem.name}
                                                    width="100%"
                                                    height="250px"
                                                    src={`https://www.youtube.com/embed/${videoItem.key}`}
                                                    frameBorder="0"
                                                    allowFullScreen
                                                ></iframe>
                                            </div>
                                        </div>
                                    ))
                                }
                            </div>
                        </div>
                    </div>
                </div>
            </section>


        </Layout>
    )
}

export default MoviePage