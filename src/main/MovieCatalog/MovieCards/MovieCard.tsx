import './MovieCard.scss'
import {MovieRating} from "../MovieRating/MovieRating";
import {Button} from "../../../common/Button/Button";
import {ReactComponent as ArrowRight} from '../../../assets/icons/arrow-right.svg';
import {Link} from "react-router-dom";


type MovieCardProps = {
    id: number,
    title: string,
    image?: string,
    released: string,
    rating: number,
}

export const MovieCard: React.FC<MovieCardProps> = ({id, title, image, released, rating}) => {

    return (<div className={'MovieCard flex-column'}>
        <img className={'MovieCard-image'} src={image} alt={'Movie Poster'}/>
        <div>
            <div className={'title'}>
                {
                    `${title} (${released})`
                }
            </div>
            <div className={'sub-title'}>
                <MovieRating rating={rating}/>
            </div>
        </div>
        <Link to={`/movies/${id}`} className={'MovieCard-read-more'}>
            <Button>
                Read More
                <ArrowRight/>
            </Button>
        </Link>
    </div>)
}