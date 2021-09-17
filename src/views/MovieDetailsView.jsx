import { useParams, useLocation, useRouteMatch } from 'react-router-dom'
import Loader from 'react-loader-spinner';
import { Route } from "react-router-dom";
import { useEffect, useState, Suspense } from 'react'
import { FetchMovieById } from '../servicies/FetchApi'
import Cast from '../components/Cast/Cast';
import Reviews from '../components/Reviews/Reviews';
import CastReviews from '../components/CastReviews/CastReviews';

export default function MovieDetailsView() {
    const { movieId } = useParams()
    const location = useLocation()
    const { url } = useRouteMatch()
    const [movie, setMovie] = useState(null)
    useEffect(() => {
        FetchMovieById(movieId, setMovie)
    }, [movieId])
    return (<>{movie && <div className='movie-card'>  <img
        className="movie-image"
        src={`https://image.tmdb.org/t/p/w342/${movie.poster_path}`}
        alt=""
    />
        <h3 className="">{movie.title}</h3>
        <p><span className='bold'>Genre:</span> {movie.genres.map(genre => genre.name).join(", ")}</p>
        <p><span className='bold'>Overview:</span> {movie.overview}</p>
        <CastReviews url={url} location={location} />
        <Suspense fallback={<Loader />}>
            <Route path="/movies/:movieId/cast">
                <Cast></Cast>
            </Route>

            <Route path="/movies/:movieId/reviews ">
                <Reviews>
                </Reviews>
            </Route>
        </Suspense>

    </div>
    }</>

    )
}