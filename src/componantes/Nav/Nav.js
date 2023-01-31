import './Nav.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMicrophone, faGear, faBitcoinSign } from '@fortawesome/free-solid-svg-icons';
import { useDispatch } from 'react-redux';
import SearchInput from '../coins/searchInput';
import { setData } from '../redux/actions';

const Nav = () => {
  const dispatch = useDispatch();
  const logoHandler = () => {
    dispatch(setData());
  };
  return (
    <header className="header">
      <div className="logo">
        <FontAwesomeIcon className="logoImg" icon={faBitcoinSign} onClick={logoHandler} />
      </div>
      <div className="feature">
        <SearchInput />
        <FontAwesomeIcon icon={faMicrophone} />
        <FontAwesomeIcon icon={faGear} />
      </div>
    </header>
  );
};

export default Nav;
