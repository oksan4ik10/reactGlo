import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/app/app';
import  './index.css';
// import AppHeader from './components/app-header/app-header';


const title = 'My Minimal React Webpack Babel Setup';

ReactDOM.render(
  <div><App/></div>,
  document.getElementById('app')
);
