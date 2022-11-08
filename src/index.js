import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter, Routes,Route } from 'react-router-dom';
import First from './First';
import Second from './Second';
import Third from './Third';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App></App>}>
        <Route path="/xyz" element={<Second></Second>}>
          <Route path='/xyz/first' element={<First></First>}></Route>
        </Route>
        <Route path='/third' element={<Third></Third>}></Route>
      </Route>
      <Route path="/abc" element={<First></First>}></Route>
    </Routes>
  </BrowserRouter>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
