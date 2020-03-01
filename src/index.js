import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { Provider } from "react-redux";
import store from "./store/index";
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';
import './components/general/generalComp.css';
import './components/homepage/homepage.css';
import './components/learn/learn.css'
// import {  Provider } from 'react-redux';
// import store from './store/store';

ReactDOM.render(
<Provider store={store}>
      <App />
</Provider>, document.getElementById('root')
   );
