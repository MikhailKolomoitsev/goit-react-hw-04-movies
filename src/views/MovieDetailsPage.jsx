import { useParams } from 'react-router-dom'
import { useEffect, useState } from 'react'
import { FetchMovieById } from '../servicies/FetchApi'

export default function MoviePage() {
    const { movieId } = useParams()
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
        <p>{movie.overview}</p></div>
    }</>

    )
}