import SearchIcon from '@mui/icons-material/Search';
import { useState } from 'react';

export default function SearchInput() {
  const [searchInput, setsearchInput] = useState('');

  const searchInputHandler = (event) => {
    setsearchInput(event.target.value);
  };
  const searchCoin = () => {
    console.log(searchInput);
  };
  return (
    <div>
      <input onChange={searchInputHandler} />
      <SearchIcon color="primary" onClick={searchCoin} />
    </div>
  );
}
