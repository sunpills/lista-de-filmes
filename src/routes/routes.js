import React from "react";
import { Route, BrowserRouter } from "react-router-dom";

import MovieDetails from "./MovieDetails.js";
import Sobre from "./Sobre";
import Usuario from "./Usuario";

const Routes = () => {
    return ( <
        BrowserRouter >
        <
        Route component = { MovieDetails }
        path = "/movie"
        exact / >
        <
        /BrowserRouter>
    )
}

export default Routes;