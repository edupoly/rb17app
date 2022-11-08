import logo from './logo.svg';
import './App.css';
import { Link, Outlet } from 'react-router-dom';

function App() {
  return (
    <div className='border border-dark p-2 m-2'>
      <h1>App Component</h1>
      <Link to="/abc">Load First Component</Link>
      <br></br>
      <Link to="/xyz">Load Second Component</Link>
      <br></br>
      <Link to="/third">Load Thrid Component</Link>
      <Outlet></Outlet>
    </div>
  );
}

export default App;
