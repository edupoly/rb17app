import logo from './logo.svg';
import './App.css';
import { Provider } from 'react-redux';
import store from './store/store';
import Counter from './Counter';
import Todolist from './Todolist';
function App() {
  return (
    <Provider store={store}>
      <div className="container border border-info p-1">
        <h1>Welcome Redux</h1>
        <Counter></Counter>
        <Todolist></Todolist>
      </div>
    </Provider>
  );
}

export default App;
