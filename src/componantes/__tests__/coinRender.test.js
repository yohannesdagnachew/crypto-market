import { Provider } from 'react-redux';
import renderer from 'react-test-renderer';
import DetailsRender from '../coins/coinsDetails/DetailsRender';
import store from '../redux/configureStore';

it('To check test is working', () => {
  expect(true).toBe(true);
});

it('Test if coinrenderer render correctly', () => {
  const list = {
    id: 'bit',
    icon: 'http/image',
    name: 'coinbase',
    rank: 2,
    marketCap: 20378420,
    symbol: 'image/24',
    price: 200,
    volume: 68,
    availableSupply: 3233,
    totalSupply: 3232,
    priceChange1h: 545,
    priceChange1d: 34,
    priceChange1w: 64,
  };
  const tree = renderer.create(
    <Provider store={store}>
      <DetailsRender List={list} />
    </Provider>
    ,
  ).toJSON();
  expect(tree).toMatchSnapshot();
});

it('Test if coinrenDetail render correctly', () => {
  const list = {
    id: 'bitcoin', icon: 'https//image1.com', price: 100, name: 'jo',
  };
  const tree = renderer.create(
    <Provider store={store}>
      <DetailsRender List={list} />
    </Provider>,
  ).toJSON();
  expect(tree).toMatchSnapshot();
});
