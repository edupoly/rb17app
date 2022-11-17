import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import '../node_modules/bootstrap/dist/js/bootstrap'
import {
    BrowserRouter,
    Routes,
    Route
  } from "react-router-dom";

import AddProducts from './components/AddProducts'
import Products from './components/Products'
import EditProduct from './components/EditProduct'
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<App></App>}>
        <Route path='/products' element={<Products></Products>}></Route>
        <Route path="/addProducts" element={<AddProducts></AddProducts>}></Route>
        <Route path="/editProduct/:id" element={<EditProduct></EditProduct>}></Route>
      </Route>
        
    </Routes>
  </BrowserRouter>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
// (state+logic)(redux)+template(react components)
// reducers
//   state+logic

// combineReducers
//   store
//     collection 
//       of  reducers  
//           state and logic
//     some methods to ignite or trigger reducers