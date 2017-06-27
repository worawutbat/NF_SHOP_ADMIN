import React from 'react';
import ReactDOM from 'react-dom';
// import App from './App';
import Bill from './adminPage';
import registerServiceWorker from './registerServiceWorker';
import './index.css';

ReactDOM.render(<Bill />, document.getElementById('root'));
registerServiceWorker();
