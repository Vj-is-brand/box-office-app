// import { Link } from 'react-router-dom';
import { useState } from 'react';
import { searchForPeople, searchForShows } from './../api/tvMaze';

const Home = () => {
  const [searchStr, setSearchStr] = useState('');
  const [apiData, setApiData] = useState(null);
  const [apiDataError, setApiDataError] = useState(null);
  const [searchOption, setSearchOption] = useState('shows');


  const onSearchStringChange = env => {
    setSearchStr(env.target.value);
  };

  const onRadioChange = async env => {
    setSearchOption(env.target.value);
  }

  const onSearch = async env => {
    env.preventDefault();


    try {
      setApiDataError(null);

      if(searchOption === 'shows'){
        const result = await searchForShows(searchStr);
        setApiData(result);
      }
      else{
        const result = await searchForPeople(searchStr);
        setApiData(result);
      }
    } catch (error) {
      setApiDataError(error);
    }
  };

  const renderApiData = () => {
    if (apiDataError) {
      return <div>Error occured: {apiDataError.message}</div>;
    }

    if (apiData) {
      return apiData[0].show ? apiData.map(data => (
        <div key={data.show.id}>{data.show.name}</div>
      )) : apiData.map(data => (
        <div key={data.person.id}>{data.person.name}</div>
      ));
    }

    return null;
  };

  return (
    <div>
      <form onSubmit={onSearch}>
        <input
          type="text"
          value={searchStr}
          onChange={onSearchStringChange}
        ></input>

<label>
Shows
  <input type="radio" name="search-option" value="shows" checked={searchOption === 'shows'} onChange={onRadioChange} />
</label>

<label>
Actor
  <input type="radio" name="search-option" value="actors" checked={searchOption === 'actors'} onChange={onRadioChange}/>
</label>

        <button type="submit">search</button>
      </form>
      <div>{renderApiData()}</div>
    </div>
  );
};

export default Home;
