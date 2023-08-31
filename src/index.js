import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from "react-redux";

import store from './redux/store';
import App from './App';

import "bootstrap/dist/css/bootstrap.min.css";
import 'bootstrap/dist/js/bootstrap.bundle.min.js'
import axios from 'axios';

axios.defaults.baseURL = 'http://localhost:3001';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);



