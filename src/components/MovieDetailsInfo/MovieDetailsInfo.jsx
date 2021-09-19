import PropTypes from "prop-types";
import { useState, useEffect } from "react";

export default function MovieDetailsInfo({ movie, goBack }) {
    return (<>
        <button type='button' onClick={goBack}>Go Back</button>
        <div className="movie-card">
            <img
                className="movie-image"
                src={`https://image.tmdb.org/t/p/w342/${movie.poster_path}`}
                alt=""
            />
            <h3 className="">{movie.title}</h3>
            <p>
                <span className="bold">Genre:</span>{' '}
                {movie.genres.map((genre) => genre.name).join(', ')}
            </p>
            <p>
                <span className="bold">Overview:</span> {movie.overview}
            </p>
        </div>
    </>
    )
}