import './MovieCardExtended.scss'
import {MovieRating} from "../MovieRating/MovieRating";
import {Button} from "../../../common/Button/Button";
import {ReactComponent as ArrowLeft} from "../../../assets/icons/arrow-left.svg";
import { Link } from "react-router-dom";

type MovieCardExtendedProps = {
    title: string,
    largeimage: string,
    rating: number,
    runtime: string,
    synopsis: string,
}

export const MovieCardExtended: React.FC<MovieCardExtendedProps> = ({title, largeimage, runtime, rating, synopsis}) => {

    return (<div className={'MovieCardExtended flex'}>
        <img src={largeimage} alt={'Movie Poster'}/>
        <section className={'MovieCardExtended-details flex-column'}>
            <div className={'title upper-case'}>
                {title}
            </div>
            <div>
                {runtime}
            </div>
            <div>
                <MovieRating rating={rating} outOf={10}/>
            </div>
            <div className={'MovieCardExtended-synopsis'} dangerouslySetInnerHTML={{ __html: synopsis }}>
            </div>
            <Link to="/movies" className={'MovieCardExtended-back-link'}>
                <Button>
                    <ArrowLeft/>
                    Back to list
                </Button>
            </Link>
        </section>
    </div>)
}