import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import CoinRender from './coinRender';
import './Coins.css';
import { setData, search } from '../redux/actions';
import SearchInput from './searchInput';

export default function Coins() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(setData());
  }, []);
  const coins = useSelector((state) => state.list);

  const Dropdown = async (e) => {
    await dispatch(setData());
    dispatch(search(e.target.value));
  };
  return (
    <div>
      <select className="drop" onChange={Dropdown}>
        <option value={100}>Filter by Rank</option>
        <option value={3}>Top 3</option>
        <option value={5}>Top 5</option>
        <option value={10}>Top 10</option>
        <option value={20}>Top 20</option>
      </select>
      <SearchInput />
      <div to className="all-coins">
        {coins.map((item) => (
          <CoinRender key={item.id} List={item} />
        ))}
      </div>
    </div>
  );
}
