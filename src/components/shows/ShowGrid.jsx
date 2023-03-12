import { useEffect, useReducer } from 'react';
import ShowCard from './ShowCard';

const usePersistedReducer = (reducer, intialState, localKeyStorage) => {
  const [state, dispatch] = useReducer(reducer, intialState, initial => {
    const persistedValue = localStorage.getItem(localKeyStorage);

    return persistedValue ? JSON.parse(persistedValue) : initial;
  });
  useEffect(() => {
    localStorage.setItem(localKeyStorage, JSON.stringify(state));
  }, [state, localKeyStorage]);

  return [state, dispatch];
};
const StarredShowsReducer = (currentStarred, action) => {
  switch (action.type) {
    case 'STAR':
      return currentStarred.concat(action.showId);
    case 'UNSTAR':
      return currentStarred.filter(showId => showId !== action.showId);
    default:
      return currentStarred;
  }
};

const ShowGrid = ({ shows }) => {
  const [starredShows, dispatchStarred] = usePersistedReducer(
    StarredShowsReducer,
    [],
    'starredShows'
  );
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
        />
      ))}
    </div>
  );
};

export default ShowGrid;
