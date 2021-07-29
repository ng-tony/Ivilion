import React from 'react';
import ReactDOM from 'react-dom';
import './custom.scss'
import './index.scss';
import CustomNavbar from './CustomNavbar'
import App from './App';

ReactDOM.render(
  <React.StrictMode>
    <header>
      <CustomNavbar/>
    </header>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

