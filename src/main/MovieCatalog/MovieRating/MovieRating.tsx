import './MovieRating.scss'
import {ReactComponent as StarIcon} from '../assets/star.svg';


type MovieRatingProps = {
    rating: number,
    outOf?: number
}


export const MovieRating: React.FC<MovieRatingProps> = ({rating, outOf}) => {

    return (
        <div className={'MovieRating flex'}>
            <StarIcon className={'star-icon'}/>
            {outOf ? `${rating}/${outOf}` : rating}
        </div>);
}
