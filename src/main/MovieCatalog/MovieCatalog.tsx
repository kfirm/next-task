import './MovieCatalog.scss';
import {MovieCard} from "./MovieCards/MovieCard";
import {useEffect, useState} from "react";
import {Search} from "../../common/Search/Search";
import {set, keys, omit, get} from "lodash"

export const MovieCatalog = () => {

    const MOVIES_INCREMENT = 20;

    const [isLoading, setIsLoading] = useState<boolean>(true);
    const [errorMessage, setErrorMessage] = useState<string>('');
    const [movies, setMovies] = useState<any>([]);
    const [searchFilter, setSearchFilter] = useState<object>({});
    const [displayedMoviesCount, setDisplayedMoviesCount] = useState<number>(MOVIES_INCREMENT);

    async function getMovies() {
        let movies = await fetch('http://localhost:3001/movies');
        movies = await movies.json();
        setMovies(movies);
        return movies;
    }

    useEffect(() => {
        try {
            getMovies();
            setIsLoading(false);
        } catch (error) {
            setIsLoading(false);
            setErrorMessage('Something went wrong :/ ...');
        }

    }, []);


    const onSearch = (key: string, value: string) => {
        if (value) {
            set(searchFilter, key, value);
            setSearchFilter({...searchFilter});
        } else {
            setSearchFilter({...omit(searchFilter, key)});
        }
    }

    const handleScroll = (event: any) => {
        const {scrollHeight, scrollTop, clientHeight} = event.target;
        const isBottomReached = scrollHeight - scrollTop === clientHeight;
        if (isBottomReached && displayedMoviesCount < movies.length) {
            setDisplayedMoviesCount(displayedMoviesCount + MOVIES_INCREMENT);
        }
    }

    const getMoviesToDisplay = () => {

        let moviesToDisplay = keys(searchFilter).length ? movies.reduce((result: any, movie: any) => {
            for (const key in searchFilter) {
                if (movie[key].toLowerCase().includes(get(searchFilter, key, '').toLowerCase())) {
                    result.push(movie);
                    break;
                }
            }
            return result;
        }, []) : movies;

        moviesToDisplay = moviesToDisplay.slice(0, displayedMoviesCount);

        return moviesToDisplay;
    }

    return (
        <div className={'MovieCatalog'} onScroll={handleScroll}>
            {isLoading ? 'Loading Movies...' :
                errorMessage || <>
                    <div className={'MovieCatalog-search'}>
                        <Search placeholder={'Search Movie Title'} onSearch={onSearch.bind(this, 'title')}/>
                        <Search placeholder={'Search By Year'} onSearch={onSearch.bind(this, 'released')}/>
                    </div>
                    <div className={'MovieCatalog-header title upper-case'}>
                        Explore your next Movies and tv shows
                    </div>
                    <section className={'MovieCatalog-section flex-center flex-wrap'}>
                        {
                            getMoviesToDisplay().map((movie: any) => <MovieCard key={movie.id} {...movie}/>)
                        }
                    </section>
                </>}
        </div>);

}
