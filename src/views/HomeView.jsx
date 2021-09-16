import { useState, useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import Films from '../components/FilmsRender/FilmsRender'
import { FetchTrending } from '../servicies/FetchApi'


export default function HomeView() {
    const location = useLocation();
    const [movies, setMovies] = useState(null);
    useEffect(() => {
        FetchTrending(setMovies);
    }, []);

    return (
        <>{movies && <Films list={movies} location={location}></Films>}</>
    )
}