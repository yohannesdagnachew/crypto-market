import React from 'react';
import PropTypes from 'prop-types';

export default function DetailsRender({
  List: {
    id,
    icon,
    name,
    rank,
    marketCap,
    symbol,
    price,
    // priceBtc,
    volume,
    availableSupply,
    totalSupply,
    priceChange1h,
    priceChange1d,
    priceChange1w,
    // websiteUrl,
    // twitterUrl,
  },
}) {
  const CurrencyFormatter = (amount) => new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
  }).format(amount);
  return (
    <div className="all-info">
      <div className="header-info" id={id} key={id}>
        <div>{name}</div>
        <img className="icons-detail" src={icon} alt={id} />
        <div>
          Price :&nbsp;
          {CurrencyFormatter(price)}
        </div>
      </div>
      <div className="info">
        <div className="info-right">
          <p>
            Rank :&nbsp;
            {rank}
          </p>
          <p>
            Symbol :&nbsp;
            {symbol}
          </p>
          <p>
            Price :&nbsp;
            {CurrencyFormatter(price)}
          </p>
          <p>
            Volume :&nbsp;
            {volume}
          </p>
          <p>
            MarketCap :&nbsp;
            {marketCap}
          </p>
        </div>
        <div className="info-left">
          <p>
            Av.Supply :&nbsp;
            {availableSupply}
          </p>
          <p>
            Tot.Supply :&nbsp;
            {totalSupply}
          </p>
          <p>
            Price var/H :&nbsp;
            {' '}
            {priceChange1h}
            % /hour
          </p>
          <p>
            Price var/D :
            {' '}
            {priceChange1d}
            % /day
          </p>
          <p>
            Price var/W :
            {' '}
            {priceChange1w}
            % /week
          </p>
        </div>
      </div>
    </div>
  );
}

DetailsRender.propTypes = {
  List: PropTypes.shape({
    id: PropTypes.string,
    rank: PropTypes.number,
    name: PropTypes.string,
    icon: PropTypes.string,
    symbol: PropTypes.string,
    marketCap: PropTypes.number,
    price: PropTypes.number,
    volume: PropTypes.number,
    priceBtc: PropTypes.number,
    availableSupply: PropTypes.number,
    totalSupply: PropTypes.number,
    priceChange1h: PropTypes.number,
    priceChange1d: PropTypes.number,
    priceChange1w: PropTypes.number,
    websiteUrl: PropTypes.string,
    twitterUrl: PropTypes.string,
  }),
};

DetailsRender.defaultProps = {
  List: 'list',
};
