/* eslint-disable react/self-closing-comp */
import './App.css';
import {
  BrowserRouter,
  Routes,
  Route,
} from 'react-router-dom';
import Details from './componantes/coins/coinsDetails/Details';
import Coins from './componantes/coins/Coins';
import Nav from './componantes/Nav/Nav';

function App() {
  return (
    <BrowserRouter>
      <Nav className="nav" />
      <Routes>
        <Route path="/" element={<Coins />} />
        <Route path="/details" element={<Details />} />
      </Routes>
    </BrowserRouter>
  );
}
export default App;
