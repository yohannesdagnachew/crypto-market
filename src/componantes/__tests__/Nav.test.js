import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import renderer from 'react-test-renderer';
import store from '../redux/configureStore';
import Nav from '../Nav/Nav';

it('To check test is working', () => {
  expect(true).toBe(true);
});

it('Test if header render correctly', () => {
  const TREE = renderer.create(
    <Provider store={store}>
      <BrowserRouter>
        <Nav />
      </BrowserRouter>
    </Provider>,
  );
  expect(TREE).toMatchSnapshot();
});
