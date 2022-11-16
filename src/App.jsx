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
import { Link, Outlet } from 'react-router-dom';
function App() {
  useEffect(()=>{
    store.dispatch(getProducts())
  },[])
  return (
    <Provider store={store}>
      <div className="container border border-info p-1">
        <h1>Welcome Redux</h1>
        <Link to="/products">Product List</Link>&nbsp;&nbsp;&nbsp;
        <Link to="/addProducts">Add Product</Link>&nbsp;&nbsp;&nbsp;
        <Outlet></Outlet>
      </div>
    </Provider>
  );
}

export default App;
