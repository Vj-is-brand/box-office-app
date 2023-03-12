import { useEffect, useReducer } from 'react';

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

export const useStarredShows = () => {
  return usePersistedReducer(StarredShowsReducer, [], 'starredShows');
};
