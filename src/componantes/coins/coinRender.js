import React from 'react';
import PropTypes from 'prop-types';
import './Coins.css';
import { useDispatch } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { detail } from '../redux/actions';

export default function CoinRender({
  List: {
    id, icon, price, name,
  },
}) {
  const CurrencyFormatter = (amount) => new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
  }).format(amount);
  const dispatch = useDispatch();
  const clickhandler = (e) => {
    dispatch(detail(e.target.id));
  };
  return (
    <NavLink title={name} to="details" className="cards" id={id} onClick={clickhandler} key={id}>
      <img className="icons" src={icon} id={id} alt={id} />
      <div id={id}>{name}</div>
      <div id={id}>{CurrencyFormatter(price)}</div>
    </NavLink>
  );
}

CoinRender.propTypes = {
  List: PropTypes.shape({
    id: PropTypes.string,
    name: PropTypes.string,
    icon: PropTypes.string,
    price: PropTypes.number,
  }),
};

CoinRender.defaultProps = {
  List: 'list',
};
