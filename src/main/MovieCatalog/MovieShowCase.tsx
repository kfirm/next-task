import './MovieShowCase.scss';
import {useEffect, useState} from "react";
import {MovieCardExtended} from "./MovieCards/MovieCardExtended";
import {useParams} from "react-router-dom";


export const MovieShowCase = () => {

    // @ts-ignore
    const {movieId}  = useParams();
    const [movie, setMovie] = useState<any>(null);
    const [isLoading, setIsLoading] = useState<boolean>(true);
    const [errorMessage, setErrorMessage] = useState<string>('');

    async function getMovie() {
        let movie = await fetch(`http://localhost:3001/movies/${movieId}`);
        movie = await movie.json();
        // @ts-ignore
        setMovie(movie[0]);
        return movie;
    }

    useEffect(() => {
        try {
            getMovie();
            setIsLoading(false);
        } catch (error) {
            setIsLoading(false);
            setErrorMessage('Something went wrong :/ ...');
        }

    }, []);



    return (
        <div className={'MovieShowCase flex-center flex-align-center'} >
            {isLoading ? 'Loading movie...' : errorMessage || <div className={'movie-details flex'}>
                <MovieCardExtended {...movie}/>
            </div>}
        </div>);

}
