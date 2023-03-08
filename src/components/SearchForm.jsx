import { useState } from 'react';

const SearchForm = ({onSearch}) => {
  const [searchStr, setSearchStr] = useState('');
  const [searchOption, setSearchOption] = useState('shows');

  const onSearchStringChange = env => {
    setSearchStr(env.target.value);
  };

  const onRadioChange =  env => {
    setSearchOption(env.target.value);
  };

  const onSubmit = (env) => {
    env.preventDefault();

    const options = {
     q:searchStr,
     searchOption
    }

    onSearch(options);
  }

  return (
    <div>
      <form onSubmit={onSubmit}>
        <input
          type="text"
          value={searchStr}
          onChange={onSearchStringChange}
        ></input>

        <label>
          Shows
          <input
            type="radio"
            name="search-option"
            value="shows"
            checked={searchOption === 'shows'}
            onChange={onRadioChange}
          />
        </label>

        <label>
          Actor
          <input
            type="radio"
            name="search-option"
            value="actors"
            checked={searchOption === 'actors'}
            onChange={onRadioChange}
          />
        </label>

        <button type="submit">search</button>
      </form>
    </div>
  );
};

export default SearchForm;
