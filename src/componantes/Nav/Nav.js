import './Nav.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMicrophone, faGear, faBitcoinSign } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
import SearchInput from '../coins/searchInput';

const Nav = () => (
  <header className="header">
    <Link className="logo" to="/">
      <FontAwesomeIcon className="logoImg" icon={faBitcoinSign} />
    </Link>
    <div className="feature">
      <SearchInput />
      <FontAwesomeIcon icon={faMicrophone} />
      <FontAwesomeIcon icon={faGear} />
    </div>
  </header>
);

export default Nav;
