import { Badge } from "@material-ui/core";
import { img_300, unavailable } from "../Config/Config";
import './SingleContent.css';

const SingleContent = ({
    id,
    poster,
    title,
    date,
    media_type,
    vote_average,

}) =>{
    return <div className="media">
        <Badge badgeContent={vote_average} color={vote_average>7?'primary':'secondary'}/>
        <img className='poster' src={poster ? `${img_300}/${poster}` : unavailable} alt={title}/>
        <b className="title">{title}</b>
        <span className='subTitle'> {media_type === 'tv' ? "Tv Series" : "Movie"} 
        <span className='subTitle'>{date}</span>
        </span>
        </div>
};
export default SingleContent;