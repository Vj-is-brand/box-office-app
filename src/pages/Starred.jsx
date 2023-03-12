import { useStarredShows } from "../lib/useStarred";
const Starred = () => {
  const [starredShows] = useStarredShows();

  return <div>Starred pages {starredShows.length}</div>;
};

export default Starred;
