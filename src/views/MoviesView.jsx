import { useState, useEffect } from "react";
import { useLocation, useHistory } from "react-router-dom";
import FilmsRender from '../components/FilmsRender/FilmsRender'
import { FetchMovies } from "../servicies/FetchApi";
import Form from "../components/form/Form";

export default function MoviesView() {
    const location = useLocation()
    const [foundMovies, setFoundMovies] = useState(null)
    return (
        <>
            <Form onSubmit={FetchMovies}></Form>
            {foundMovies && <FilmsRender list={foundMovies} location={location} />}
        </>
    )
}