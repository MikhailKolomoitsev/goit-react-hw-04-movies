import { useState, useEffect } from "react";
import { useLocation, useHistory } from "react-router-dom";
import FilmsRender from '../components/FilmsRender/FilmsRender'
import { FetchMovies } from "../servicies/FetchApi";
import Form from "../components/form/Form";

export default function MoviesView() {
    const location = useLocation()
    const url = new URLSearchParams(location.search).get("query");
    const history = useHistory();
    const [foundMovies, setFoundMovies] = useState(null)
    const [query, setQuery] = useState(url ?? "");

    const getQuery = (query) => {
        history.push({ ...location, search: `query=${query}` });
        setQuery(query);
    }

    useEffect(() => {
        if (query === "" && url === null) return;
        FetchMovies(query, setFoundMovies);
    }, [query, url]);


    return (
        <>
            <Form onSubmit={getQuery}></Form>
            {foundMovies && <FilmsRender list={foundMovies} location={location} />}
        </>
    )
}