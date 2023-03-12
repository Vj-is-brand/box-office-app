import { Link, useParams  } from 'react-router-dom';
import { searchShowInfo } from '../api/tvMaze';
import { useQuery } from '@tanstack/react-query';
import ShowMainData from '../components/shows/ShowMainData';
import Details from '../components/shows/Details';
import Seasons from '../components/shows/Seasons';
import Cast from '../components/shows/Cast';

const Show = () => {
  const { showId } = useParams();

  const { data: showData, error: showError } = useQuery({
    queryKey: ['show', showId],
    queryFn: () => searchShowInfo(showId),
    refetchOnWindowFocus: false,
  });
  
  
  // const navigateTo = useNavigate();
  // function backHome() {
  //   navigateTo('/');
  // }
  
  if (showError) {
    return <div>you have an error. {showError.mesage()}</div>;
  }

  
  if (showData) {

    return (
      <div>
        <Link to="/">Back to home page</Link>
          {/* <button type='button' onClick={backHome}>Back to home</button> */}
        <ShowMainData
          image={showData.image}
          name={showData.name}
          rating={showData.rating}
          summary={showData.summary}
          genres={showData.genres}
        />

        <h2>Details</h2>
        <Details
          status={showData.status}
          premiered={showData.premiered}
          network={showData.network}
        />

        <div>
          <h2>Seasons</h2>
          <Seasons seasons={showData._embedded.seasons} />
        </div>

        <div>
          <h2>cast</h2>
          <Cast cast={showData._embedded.cast} />
        </div>
      </div>
    );
  }
  return <div>your data is loading</div>;
};

export default Show;
