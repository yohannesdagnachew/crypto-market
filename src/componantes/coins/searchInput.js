import SearchIcon from '@mui/icons-material/Search';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { search } from '../redux/actions';
import './searchInput.css';

export default function SearchInput() {
  const dispatch = useDispatch();
  const [searchInput, setSearchInput] = useState('');

  const searchInputHandler = (event) => {
    setSearchInput(event.target.value);
  };
  const searchCoin = () => {
    if (searchInput === '') {
      return;
    }
    dispatch(search(searchInput));
  };
  return (
    <>
      <input className="searchInput" onChange={searchInputHandler} />
      <SearchIcon color="primary" onClick={searchCoin} />
    </>
  );
}
