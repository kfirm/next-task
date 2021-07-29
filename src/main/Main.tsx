import React from 'react';
import './Main.scss'
import {TopBar} from "./TopBar/TopBar";
import {MovieCatalog} from "./MovieCatalog/MovieCatalog";
import {Footer} from "./Footer/Footer"; // importing FunctionComponent


export const Main = () =>
    <main className={'Main'}>
        <TopBar></TopBar>
        <MovieCatalog></MovieCatalog>
        <Footer></Footer>
    </main>;