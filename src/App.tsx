import React from 'react';
import {Main} from './main/Main'
import './App.scss';
import {Redirect} from 'react-router';
import {
    BrowserRouter as Router,
    Route,
} from "react-router-dom";
import {MovieShowCase} from "./main/MovieCatalog/MovieShowCase";

function App() {
    return (
        <div className="App">
            <Router>
                <Route path="/" exact>
                    <Redirect from="/" to="/movies"/>
                </Route>
                <Route path="/movies">
                    <Main/>
                </Route>
                <Route path="/movies/:movieId">
                    <MovieShowCase/>
                </Route>
                <Route path="*" exact>
                    <Redirect from="*" to="/movies"/>
                </Route>
            </Router>
        </div>

    );
}

export default App;
