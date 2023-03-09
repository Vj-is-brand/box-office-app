import { Link } from "react-router-dom";

const ShowCard = ({id,image,name,summary}) => {
    const summaryStripped = summary ? 
    summary.split(' ').slice(0,10).join(' ').replace(/<.+?>/g, '') : 'No Description' ;
    return <div>
        <div><img src={image} alt={name}></img></div>
        <h1>{name}</h1>
        <div>{summaryStripped}</div>

        <Link to={`/shows/${id}`}>Read more</Link>
        <button type="button">star me</button>
    </div>
}

export default ShowCard;