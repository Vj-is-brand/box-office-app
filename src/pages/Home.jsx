// import { Link } from 'react-router-dom';
import { useState } from 'react';
import ActorGrid from '../components/actors/ActorGrid';
import SearchForm from '../components/SearchForm';
import ShowGrid from '../components/shows/ShowGrid';
import { searchForPeople, searchForShows } from './../api/tvMaze';

const Home = () => {
  
  const [apiData, setApiData] = useState(null);
  const [apiDataError, setApiDataError] = useState(null);

 
  const onSearch = async ({q,searchOption}) => {

    try {
      setApiDataError(null);

      let result;
      if (searchOption === 'shows') {
         result = await searchForShows(q);
      } else {
         result = await searchForPeople(q);
      }
      
      setApiData(result);

    } catch (error) {
      setApiDataError(error);
    }
  };

  const renderApiData = () => {
    if (apiDataError) {
      return <div>Error occured: {apiDataError.message}</div>;
    }
     
    if(apiData?.length === 0 ){
     return <div>No result found - 404</div>
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
