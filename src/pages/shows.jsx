import { useParams } from 'react-router-dom';
const Show = () => {
    const {showId } = useParams();
    console.log(showId);
    return <div>shows for the {showId}</div>
}

export default Show;