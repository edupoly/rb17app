import logo from './logo.svg';
import './App.css';
import { Provider } from 'react-redux';
import store from './store/store';
import Counter from './Counter';
import Todolist from './Todolist';
import Countries from './Countries';
import Products from './Products';
import { useEffect } from 'react';
import { getProducts } from './store/actions/product.actions';
function App() {
  useEffect(()=>{
    store.dispatch(getProducts())
  },[])
  return (
    <Provider store={store}>
      <div className="container border border-info p-1">
        <h1>Welcome Redux</h1>
        <Products></Products>
        {/* <Counter></Counter>
        <Todolist></Todolist>
        <Countries></Countries> */}
      </div>
    </Provider>
  );
}

export default App;
