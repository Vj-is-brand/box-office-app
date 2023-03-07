// import { Link } from 'react-router-dom';
import { useState } from 'react';
import { searchForShows } from './../api/tvMaze';

const Home = () => {
  const [searchStr, setSearchStr] = useState('');
  const [apiData, setApiData] = useState(null);
  const [apiDataError, setApiDataError] = useState(null);


  const onSearchStringChange = env => {
    setSearchStr(env.target.value);
  };

  const onSearch = async env => {
    env.preventDefault();

    try{
      setApiDataError(null);
      const result = await searchForShows(searchStr);
      setApiData(result);
    }
    catch(error){
      setApiDataError(error);
    }
  };

  const renderApiData = () => {
  if(apiDataError){
    return <div>Error occured: {apiDataError.message}</div>
  }

    if(apiData){
      return apiData.map((data) => (
        <div key={data.show.id}>{data.show.name}</div>
      ));
    }

   return null;
  }

  return (
    <div>
      <form onSubmit={onSearch}>
        <input
          type="text"
          value={searchStr}
          onChange={onSearchStringChange}
        ></input>
        <button type="submit">search</button>
      </form>
      <div>
      {renderApiData()}
      </div>
    </div>
  );
};

export default Home;
