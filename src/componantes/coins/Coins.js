import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import CoinRender from './coinRender';
import './Coins.css';
import { setData } from '../redux/actions';
import DropDown from './DropDown';

export default function Coins() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(setData());
  }, []);
  const coins = useSelector((state) => state.list);

  return (
    <>
      <div className="drop_down">
        <DropDown />
      </div>
      <div to className="all-coins">
        {coins.map((item) => (
          <CoinRender key={item.id} List={item} />
        ))}
      </div>
    </>
  );
}
