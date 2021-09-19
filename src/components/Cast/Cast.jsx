import { useParams } from 'react-router'
import { useState, useEffect } from 'react'
import { FetchMovieCast } from '../../servicies/FetchApi'
import default_poster from '../../images/def-poster.jpg'
export default function Cast() {
    const [cast, setCast] = useState(null)
    const { movieId } = useParams()

    useEffect(() => {
        FetchMovieCast(movieId, setCast)
    }, [movieId])

    return (
        <div>
            {cast && (
                <ul>
                    {cast.map((item) => {
                        let poster = item.profile_path
                            ? `https://image.tmdb.org/t/p/w200${item.profile_path}`
                            : default_poster
                        return (
                            <li key={item.id}>
                                <img src={poster} alt={item.author} />
                                <h4>{item.author}</h4>
                                <p>{item.character}</p>
                            </li>
                        )
                    })}
                </ul>
            )}
        </div>
    )
}