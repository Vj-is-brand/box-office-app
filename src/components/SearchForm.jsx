import { useState } from 'react';
import { useSearchStr } from '../lib/useSearchStr';
import CustomRadio from './CustomRadio';

const SearchForm = ({ onSearch }) => {
  const [searchStr, setSearchStr] = useSearchStr();
  const [searchOption, setSearchOption] = useState('shows');

  const onSearchStringChange = env => {
    setSearchStr(env.target.value);
  };

  const onRadioChange = env => {
    setSearchOption(env.target.value);
  };

  const onSubmit = env => {
    env.preventDefault();

    const options = {
      q: searchStr,
      searchOption,
    };

    onSearch(options);
  };

  return (
    <div>
      <form onSubmit={onSubmit}>
        <input
          type="text"
          value={searchStr}
          onChange={onSearchStringChange}
        ></input>

        <CustomRadio
          label="shows"
          type="radio"
          name="search-option"
          value="shows"
          checked={searchOption === 'shows'}
          onChange={onRadioChange}
        />

        <CustomRadio
          label="actors"
          type="radio"
          name="search-option"
          value="actors"
          checked={searchOption === 'actors'}
          onChange={onRadioChange}
        />

        <button type="submit">search</button>
      </form>
    </div>
  );
};

export default SearchForm;
