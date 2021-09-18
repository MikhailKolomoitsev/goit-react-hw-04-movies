import { useParams } from "react-router";
import { useState, useEffect } from "react";
import { FetchMovieCast } from "../../servicies/FetchApi";

export default function Cast() {
    const [cast, setCast] = useState(null)
    const { movieId } = useParams()

    useEffect(() => {
        FetchMovieCast(movieId, setCast)
    }, [movieId])

    return (
        <div>{cast.length > 0 &&
            <ul>
                {cast.map((item) => {
                    return (<>
                        <li key={item.id} >
                            <h4>{item.author}</h4>
                            <p >{item.character}</p>
                        </li></>
                    )
                })}
            </ul>
        }
        </div >

    )
}