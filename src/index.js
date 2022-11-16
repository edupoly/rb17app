import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import '../node_modules/bootstrap/dist/js/bootstrap'
import {
    createBrowserRouter,
    RouterProvider,
    Route,
  } from "react-router-dom";
const root = ReactDOM.createRoot(document.getElementById('root'));

const router = createBrowserRouter([
    {
      path: "/",
      element: (<App></App>),
    },
    {
      path: "addProduct",
      element: (<AddProducts></AddProducts>)
    },
  ]);

import AddProducts from './AddProducts';
root.render(
    <App />
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