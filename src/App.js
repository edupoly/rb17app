import logo from './logo.svg';
import './App.css';
import H1Counter from './H1Counter';
import ButtonCounter from './ButtonCounter';

function App() {
  return (
   <div className='border border-dark p-2 m-2'>
    <H1Counter></H1Counter>
    <ButtonCounter></ButtonCounter>
   </div>
  );
}

export default App;
