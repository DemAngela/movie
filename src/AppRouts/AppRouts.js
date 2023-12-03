import React from "react";
import {Route, Routes} from "react-router-dom";
import HomePage from "../Views/HomePage";
import MoviePage from "../Views/MoviePage";
import SearchPage from "../Views/SearchPage";

const AppRouts = () => {
    return (
        <Routes>
            <Route path='/' element={<HomePage />} />
            <Route path='/movie/:id' element={<MoviePage />} />
            <Route path='/search' element={<SearchPage />} />
        </Routes>
    )
}

export default AppRouts