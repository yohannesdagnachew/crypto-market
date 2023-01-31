import SearchIcon from '@mui/icons-material/Search';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { search } from '../redux/actions';

export default function SearchInput() {
  const dispatch = useDispatch();
  const [searchInput, setsearchInput] = useState('');

  const searchInputHandler = (event) => {
    setsearchInput(event.target.value);
  };
  const searchCoin = () => {
    if (searchInput === '') {
      return;
    }
    dispatch(search(searchInput));
  };
  return (
    <>
      <input onChange={searchInputHandler} />
      <SearchIcon color="primary" onClick={searchCoin} />
    </>
  );
}
