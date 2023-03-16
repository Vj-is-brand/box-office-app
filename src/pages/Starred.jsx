import { useStarredShows } from '../lib/useStarred';
import { useQuery } from '@tanstack/react-query';
import { getShowsByIds } from '../api/tvMaze';
import ShowGrid from '../components/shows/ShowGrid';
import { TextCenter } from '../components/common/TextCenter';

const Starred = () => {
  const [starredShowsIds] = useStarredShows();

  const { data: starredShows, error: starredShowsError } = useQuery({
    queryKey: ['starred', starredShowsIds],
    queryFn: () =>
      getShowsByIds(starredShowsIds).then(result =>
        result.map(show => ({ show}))
      ),
    refetchOnWindowFocus: false,
  });

  if (starredShows?.length === 0) {
    return<TextCenter>You have no starred page</TextCenter>;
  }

  if (starredShows?.length > 0) {
    return<ShowGrid shows={starredShows} />;
  }

  if (starredShowsError) {
    return<ShowGrid shows={starredShowsError.message} />;
  }

  return <TextCenter>Starred pages {starredShowsIds.length}</TextCenter>;
};

export default Starred;
