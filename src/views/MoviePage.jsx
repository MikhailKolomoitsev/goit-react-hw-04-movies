import { useParams } from 'react-router-dom'
import { useEffect, useState } from 'react'
import { FetchMovieById } from '../servicies/FetchApi'

export default function MoviePage() {
    const { movieId } = useParams()
    const [movie, setMovie] = useState(null)
    useEffect(() => {
        FetchMovieById(movieId, setMovie)
    }, [movieId])
    return (<>{movie && <div>  <img
        className=""
        src={`https://image.tmdb.org/t/p/w342/${movie.poster_path}`}
        alt=""
    />
        <p className="">{movie.title}</p></div>
    }</>

    )
}