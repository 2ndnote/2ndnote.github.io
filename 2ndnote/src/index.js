import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './app';
import Navbar from './nav'
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<Navbar/>, document.getElementById('nav'));
ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
