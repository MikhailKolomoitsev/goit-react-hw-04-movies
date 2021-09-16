import styles from './FilmsRender.module.css'
import { Link } from "react-router-dom";
import PropTypes from "prop-types";

export default function Films({ list, location }) {
    return (
        <>
            <h2>Trending films</h2>
            <ul className=''>
                {list.map(film => {
                    return (
                        <li>
                            <Link
                                to={{
                                    pathname: `/movies/${film.id}`,
                                    state: { from: location },
                                }}
                            >
                                <img
                                    className=""
                                    src={`https://image.tmdb.org/t/p/w342/${film.poster_path}`}
                                    alt=""
                                />
                                <h2 className="">{film.title}</h2>
                            </Link>
                        </li>
                    )
                })}
            </ul>
        </>
    )
}

Films.propTypes = {
    list: PropTypes.object,
    location: PropTypes.object,
}