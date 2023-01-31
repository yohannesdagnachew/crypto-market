import React from 'react';
import { useDispatch } from 'react-redux';
import { filterByRank } from '../redux/actions';
import './Coins.css';

export default function DropDown() {
  const dispatch = useDispatch();
  const Dropdown = async (e) => {
    dispatch(filterByRank(e.target.value));
  };
  return (
    <select className="drop" onChange={Dropdown}>
      <option value={100}>Filter by Rank</option>
      <option value={3}>Top 3</option>
      <option value={5}>Top 5</option>
      <option value={10}>Top 10</option>
      <option value={20}>Top 20</option>
    </select>
  );
}
