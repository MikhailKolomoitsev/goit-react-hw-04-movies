import { useState, useEffect } from "react";
import { useLocation, useHistory } from "react-router-dom";
import Films from '../components/Films/Films'
import { FetchMovies } from "../servicies/FetchApi";

export default function MoviesView() {
    return (
        <h1>Тут будут фильмы</h1>
    )
}