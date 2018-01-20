import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './app';
import Navbar from './nav'
import Content from './mission'
import Team from './team'
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<Navbar/>, document.getElementById('nav'));
ReactDOM.render(<App />, document.getElementById('root'));
ReactDOM.render(<Content/>, document.getElementById('content'));
ReactDOM.render(<Team/>, document.getElementById('team'));

registerServiceWorker();
