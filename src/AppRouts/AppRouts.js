import React from "react";
import {Route, Routes} from "react-router-dom";
import HomePage from "../Views/HomePage";
import MoviePage from "../Views/MoviePage";

const AppRouts = () => {
    return (
        <Routes>
            <Route path='/' element={<HomePage />} />
            <Route path='/movie/:name' element={<MoviePage />} />
        </Routes>
    )
}

export default AppRouts