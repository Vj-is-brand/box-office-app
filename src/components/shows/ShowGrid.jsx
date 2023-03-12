import { useStarredShows } from '../../lib/useStarred';
import ShowCard from './ShowCard';


const ShowGrid = ({ shows }) => {
  const [starredShows, dispatchStarred] = useStarredShows();
  console.log({ starredShows });

  const onStarMeClick = showId => {
    const isStarred = starredShows.includes(showId);

    if (isStarred) {
      dispatchStarred({ type: 'UNSTAR', showId });
    } else {
      dispatchStarred({ type: 'STAR', showId });
    }
  };

  return (
    <div>
      {shows.map(data => (
        <ShowCard
          key={data.show.id}
          id={data.show.id}
          image={
            data.show.image ? data.show.image.medium : '/no-image-found.png'
          }
          name={data.show.name}
          summary={data.show.summary}
          onStarMeClick={onStarMeClick}
          isStarred={starredShows.includes(data.show.id)}
        />
      ))}
    </div>
  );
};

export default ShowGrid;
