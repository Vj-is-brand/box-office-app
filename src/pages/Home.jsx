// import { Link } from 'react-router-dom';
import { useState } from 'react';
import ActorGrid from '../components/actors/ActorGrid';
import SearchForm from '../components/SearchForm';
import ShowGrid from '../components/shows/ShowGrid';
import { searchForPeople, searchForShows } from './../api/tvMaze';
import { useQuery } from '@tanstack/react-query';

const Home = () => {
  
  // const [apiData, setApiData] = useState(null);
  // const [apiDataError, setApiDataError] = useState(null);

  const [filter, setFilter] = useState(null)

  const { data:apiData, error:apiDataError } = useQuery({
      queryKey: ['search', filter],
      queryFn: () => filter.searchOption === 'shows' ? searchForShows (filter.q): searchForPeople(filter.q),
      // ⬇️ disabled as long as the filter is empty
      enabled: !!filter,
      refetchOnWindowFocus:false
  });

//  const { data }= useQuery({queryKey:['onSearch',q],queryFn: () => searchForShows(q)})
  const onSearch = async ({q,searchOption}) => {
     setFilter({q,searchOption});
    // try {
    //   setApiDataError(null);

    //   let result;
    //   if (searchOption === 'shows') {
    //      result = await searchForShows(q);
    //   } else {
    //      result = await searchForPeople(q);
    //   }
      
    //   setApiData(result);

    // } catch (error) {
    //   setApiDataError(error);
    // }
  };

  const renderApiData = () => {
    if (apiDataError) {
      return <div>Error occured: {apiDataError.message}</div>;
    }
     
    if(apiData?.length === 0 ){
     return <div>No result found</div>
    }

    if (apiData) {
      return apiData[0].show
        ? <ShowGrid shows={apiData}/>
        : <ActorGrid actors={apiData}/>
    }

    return null;
  };

  return (
    <div>
     <SearchForm onSearch={onSearch}/>
      <div>{renderApiData()}</div>
    </div>
  );
};

export default Home;
