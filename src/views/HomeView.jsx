import { useState, useEffect } from 'react'
import Loader from "react-loader-spinner";
import { useLocation } from 'react-router-dom'
import { FetchTrending } from '../servicies/FetchApi'
import React, { Suspense, lazy } from "react";

const FilmsRender = lazy(() => import('../components/FilmsRender/FilmsRender'))

export default function HomeView() {
    const location = useLocation();
    const [movies, setMovies] = useState(null);
    useEffect(() => {
        FetchTrending(setMovies);
    }, []);

    return (
        <Suspense fallback={Loader}>
            {movies && <FilmsRender list={movies} location={location}></FilmsRender>}
        </Suspense>

    )
}