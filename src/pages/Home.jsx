import { useState } from 'react';
import ActorGrid from '../components/actors/ActorGrid';
import SearchForm from '../components/SearchForm';
import ShowGrid from '../components/shows/ShowGrid';
import { searchForPeople, searchForShows } from './../api/tvMaze';
import { useQuery } from '@tanstack/react-query';
import {TextCenter} from '../components/common/TextCenter'

const Home = () => {
  const [filter, setFilter] = useState(null);

  const { data: apiData, error: apiDataError } = useQuery({
    queryKey: ['search', filter],
    queryFn: () =>
      filter.searchOption === 'shows'
        ? searchForShows(filter.q)
        : searchForPeople(filter.q),
    enabled: !!filter,
    refetchOnWindowFocus: false,
  });

  const onSearch = async ({ q, searchOption }) => {
    setFilter({ q, searchOption });
  };

  const renderApiData = () => {
    if (apiDataError) {
      return <TextCenter>Error occured: {apiDataError.message}</TextCenter>;
    }

    if (apiData?.length === 0) {
      return <TextCenter>No result found</TextCenter>;
    }

    if (apiData) {
      return apiData[0].show ? (
        <ShowGrid shows={apiData} />
      ) : (
        <ActorGrid actors={apiData} />
      );
    }

    return null;
  };

  return (
    <div>
      <SearchForm onSearch={onSearch} />
      <div>{renderApiData()}</div>
    </div>
  );
};

export default Home;
