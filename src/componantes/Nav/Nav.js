import './Nav.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMicrophone, faGear, faBitcoinSign } from '@fortawesome/free-solid-svg-icons';

const Nav = () => (
  <header className="header">
    <FontAwesomeIcon className="logo" icon={faBitcoinSign} />
    <div className="feature">
      <FontAwesomeIcon icon={faMicrophone} />
      <FontAwesomeIcon icon={faGear} />
    </div>
  </header>
);

export default Nav;
