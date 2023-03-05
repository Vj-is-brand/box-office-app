// import { Link } from 'react-router-dom';
import {useState} from 'react';

const Home = () => {
    const [ searchStr , setSearchStr ]=useState('');
    
    const onSearchStringChange = (env) => {
     setSearchStr(env.target.value);
    }

    const onSearch = async(env) => {
    env.preventDefault();

   const response = await fetch(
    `https://api.tvmaze.com/search/shows?q=${searchStr}`
     );
    const body = await response.json();
     console.log(body);
    // https://api.tvmaze.com/search/shows?q=girls
    }

  return (
    <div>
    
    <form onSubmit={onSearch}>
    <input type='text' value={searchStr} onChange={ onSearchStringChange }></input>
    <button type="submit">search</button>
    </form>
    </div>
  );
};

export default Home;
