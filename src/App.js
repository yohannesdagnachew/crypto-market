/* eslint-disable react/self-closing-comp */
import { useSelector } from 'react-redux';
import './App.css';
import Citys from './componantes/county/Citys';
import Contry from './componantes/county/Contry';

function App() {
  const data = useSelector((state) => state);
  console.log(data);
  return (
    <div className="App">
      <Contry />
      <Citys />
    </div>
  );
}
export default App;
